import * as express from "express";
import { routes } from "./routes";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "internal error"
    });
})

app.get("/", (request, response) => {
    return response.json({
        message: "Hello world!"
    })
})

app.listen(3000, () => console.log("Server is running"))