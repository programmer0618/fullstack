import { Router } from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const ManagementRoutes = Router();

ManagementRoutes.get("/admins", getAdmins);
ManagementRoutes.get("/performance/:id", getUserPerformance);

export default ManagementRoutes;
