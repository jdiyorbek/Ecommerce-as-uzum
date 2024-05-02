const express = require("express");
const { createBrand, updateBrand, viewsBrand, viewBrand, deleteBrand } = require("../Controllers/brandController");
const router = express.Router();

router.post("/", createBrand);
router.put("/:id", updateBrand);
router.get("/", viewsBrand);
router.get("/:id", viewBrand);
router.delete("/:id", deleteBrand);

module.exports = router;