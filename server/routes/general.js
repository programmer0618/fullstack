import { Router } from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const GeneralRoutes = Router();

GeneralRoutes.get("/user/:id", getUser);
GeneralRoutes.get("/dashboard", getDashboardStats);

export default GeneralRoutes;
