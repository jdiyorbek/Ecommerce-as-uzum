const express = require("express");
const { createUser, loginUser, views, view, update, deleted } = require("../Controllers/userController");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', views)
router.get('/:id', view)
router.put('/:id', update);
router.delete('/:id', deleted);


module.exports = router