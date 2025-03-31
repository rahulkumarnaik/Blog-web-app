import express from "express";
import {
  getAllPosts,
  getNewPostForm,
  createPost,
  getEditPostForm,
  updatePost,
  deletePost,
} from "../controllers/postController.js"; 

const router = express.Router();

// Routes
router.get("/", getAllPosts);
router.get("/new", getNewPostForm);
router.post("/posts", createPost);
router.get("/edit/:id", getEditPostForm);
router.post("/update/:id", updatePost);
router.post("/delete/:id", deletePost);

export default router;
