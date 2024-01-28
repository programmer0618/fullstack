import { Router } from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const ClientRoutes = Router();

ClientRoutes.get("/products", getProducts);
ClientRoutes.get("/customers", getCustomers);
ClientRoutes.get("/transactions", getTransactions);
ClientRoutes.get("/geography", getGeography);

export default ClientRoutes;
