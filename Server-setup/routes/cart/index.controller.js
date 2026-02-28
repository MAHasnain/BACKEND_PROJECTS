import { Router } from "express";
import {getACartItem, getAllItems} from "./get.service.js";
import { deleteCartItem } from "./delete.service.js";
import { newCartItem } from "./post.service.js";

const cartRoutes = Router();

cartRoutes.post("/:id", newCartItem)

cartRoutes.get("/cartItems", getAllItems)

cartRoutes.get("/:id", getACartItem)

cartRoutes.delete("/:itemId", deleteCartItem)

// cartRoutes.post("/", postCart)

export default cartRoutes