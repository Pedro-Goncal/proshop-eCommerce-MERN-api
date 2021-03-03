import express from "express";
const router = express.Router();

//CONTROLLERS
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

//MIDDLEWARES
import { protect, isAdmin } from "../middleware/authMiddleware.js";

//==============
//api/users
//==============

router.route("/").post(registerUser).get(protect, isAdmin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//ADMIN ROUTES
router
  .route("/:id")
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);

export default router;
