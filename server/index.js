import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {
  ClientRoutes,
  GeneralRoutes,
  ManagementRoutes,
  SalesRoutes,
} from "./routes/index.js";

/* data imports */
import User from "./models/user.js";
import Product from "./models/product.js";
import ProductStat from "./models/product-stat.js";
import Transaction from "./models/transaction.js";
import OveralStat from "./models/overalstat.js";
import AffiliateStat from "./models/affiliate-stat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const server = express();
server.use(express.json());
server.use(helmet());
server.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
server.use(morgan("common"));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

/* ROUTE */
server.use("/client", ClientRoutes);
server.use("/general", GeneralRoutes);
server.use("/management", ManagementRoutes);
server.use("/sales", SalesRoutes);

/* MONGOOSE SETUP */

const ServerLocal = () => {
  try {
    const PORT = process.env.PORT || 5001;
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Mongo DB connect!"))
      .catch((error) => console.log("Mongo db not connect! ", error));

    /* ONL ADD DATA ONE TIME */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OveralStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
    server.listen(PORT, () => console.log("Server is running port:", PORT));
  } catch (error) {
    console.log("ERROR" + error);
  }
};

ServerLocal();
