import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";

/**
 * Esta ruta solo pueden acceder las personas que tienen
 * sesión activa. Que tengan un JWT válido.
 */

const router = Router();

router.get("/", checkJwt, getItems);

export { router };
