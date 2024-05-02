const { createProcessor, viewsProcessor, updateProcessor, deleteProcessor } = require("../Controllers/processorController");

const router = require("express").Router();

router.post("/", createProcessor);
router.get("/", viewsProcessor);
router.put("/:id", updateProcessor);
router.delete("/:id", deleteProcessor);

module.exports = router;