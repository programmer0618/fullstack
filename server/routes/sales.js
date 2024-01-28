import { Router } from "express";
import { getSales } from "../controllers/sales.js";

const SalesRoutes = Router();

SalesRoutes.get("/sales", getSales);

export default SalesRoutes;
