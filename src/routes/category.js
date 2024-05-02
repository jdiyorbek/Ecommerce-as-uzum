const express = require("express");
const { createCategory, viewsCategory, updateCategory, deleteCategory } = require("../Controllers/categoryController");
const router = express.Router();

router.post('/', createCategory);
router.get("/", viewsCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router
