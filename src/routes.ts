import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };