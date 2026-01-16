
import express from "express";
import postsController from "../controllers/postsController.js"


const router = express.Router();


// Index
router.get("/", postsController.index);


//  Show
router.get("/:id", postsController.show);



//  Create
router.post("/", postsController.create);



//  Update
router.put("/:id", postsController.update);



//  Modify 
router.patch("/:id", postsController.modify)



//  Delete
router.delete("/:id", postsController.destroy)


export default router;
