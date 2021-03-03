import path from "path";
import express from "express";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//Terminal Colors Pakage for fun
import colors from "colors";

//MONGO DB
import connectDB from "./config/db.js";

//DOTENV
import dotenv from "dotenv";
dotenv.config();

//CORS
import cors from "cors";

//ROUTES
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

//PORT
const PORT = process.env.PORT || 4000;

//Initialize express
const app = express();

//Connect To Mongo DB
connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, DELETE, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

//Initialize cors
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//===================
//APIs
//===================

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//Upload images and making folder static
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  () =>
    console.log(`==>listening on http://localhost:${PORT}<==`.yellow.underline) //colors package
);
