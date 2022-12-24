import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveries/createDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllWithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDate/findAllWithoutEndDateController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/updateDeliveryman/useCases/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanControlles } from "./modules/deliveryman/useCases/FindAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateUseCaseController } from "./modules/deliveryman/useCases/updateEndDate/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllController = new FindAllWithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanControlles();
const updateEndDateDeliveryman = new UpdateEndDateUseCaseController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesClient.handle);

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/onemore", ensureAuthenticateDeliveryman, findAllController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateDeliveryman.handle)

export { routes };