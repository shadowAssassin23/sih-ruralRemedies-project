import express from "express";
import {
    deleteSingleProduct,
    getAllProducts,
    getProduct,
    updateProduct
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a single product
router.post("/", getProduct);

// Delete a single product by ID
router.delete("/:id", deleteSingleProduct);

// Get all product
router.get("/", getAllProducts);

// Update a product by ID
router.put("/:id", updateProduct);

export default router;
