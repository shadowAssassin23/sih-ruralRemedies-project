import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); // allow us to accept JSON data in the req.body

app.use("/api/v1/products", productRoutes);


// initial route for test server
app.get("/", (req, res) => {
    res.send("Server is ready...");
    console.log(app);
});

app.listen(port, () => {
    connectDB();
    console.log("App listen at port: " + port);
});
