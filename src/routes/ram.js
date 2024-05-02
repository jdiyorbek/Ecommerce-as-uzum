const { createRam, viewsRam, deleteRam } = require("../Controllers/ramController");

const router = require("express").Router();

router.post("/", createRam);
router.get("/", viewsRam);
router.delete("/:id", deleteRam);

module.exports = router;