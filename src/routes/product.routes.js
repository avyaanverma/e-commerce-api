import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const productRoutes = express.Router();

/**
 * @route GET /
 * @description Get all the products
 * @access PRIVATE
 */
productRoutes.get("/", authMiddleware, getAllProducts);
/**
 * @route GET /:id
 * @description Get a specific product
 * @access PRIVATE
 */
productRoutes.get("/:id", getProduct);
/**
 * @route POST /create
 * @description Create a note using name, description, price, category
 * @access PRIVATE
 */
productRoutes.post("/create", authMiddleware, upload.array("productImages", 5), createProduct);
/**
 * @route POST /delete
 * @description Delete a product using title and description
 * @access PRIVATE  
 */
productRoutes.delete("/delete", authMiddleware, deleteProduct);
/**
 * @route POST /update
 * @description Update a Product
 * @access PRIVATE
 */
productRoutes.patch("/update", authMiddleware, updateProduct );

export default productRoutes;