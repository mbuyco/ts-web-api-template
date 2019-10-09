import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import lusca from "lusca";

// Routes
import productsRouter from "./routes/products";

// Express app
const app = express();

// Express config
app.set("port", process.env.port || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// API routes
app.use("/api/products", productsRouter);

export default app;
