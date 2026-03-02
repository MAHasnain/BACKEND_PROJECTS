import { Router } from "express";
import { loginUser, registerUser } from "./post.service.js";
import { getAllUser, getAnUser } from "./get.service.js";
import { editProfile } from "./put.service.js";
import { deleteUser } from "./delete.service.js";

const userRoutes = Router();

userRoutes.get('/', getAllUser);

userRoutes.get('/:id', getAnUser);

userRoutes.post('/register', registerUser);

userRoutes.post('/login', loginUser);

userRoutes.put('/:id', editProfile);

userRoutes.delete('/:id', deleteUser);

export default userRoutes;
