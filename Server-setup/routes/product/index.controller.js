import { Router } from "express";
import { getAllProducts, getProductById } from "./get.service.js";
import { newProduct } from "./post.service.js";
import { deleteProduct } from "./delete.service.js";
import { updateProduct } from "./put.service.js";

const productRoutes = Router()

productRoutes.get("/:id", getProductById)

productRoutes.get("/", getAllProducts)

productRoutes.put("/:id", updateProduct)

productRoutes.post("/new-product", newProduct)

productRoutes.delete("/delete-product", deleteProduct)

export default productRoutes