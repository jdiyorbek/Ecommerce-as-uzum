const express = require("express");
const { createColor, updateColor, viewsColor, viewColor, deleteColor } = require("../Controllers/colorController");
const router = express.Router();

router.post('/', createColor);
router.put('/:id', updateColor);
router.get('/', viewsColor);
router.get('/:id', viewColor);
router.delete('/:id', deleteColor);


module.exports = router;