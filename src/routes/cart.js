const router = require("express").Router()
const { authMiddleware } = require("../middleware/auth")
const { addToCart, getUserCart, deleteCart } = require("../Controllers/cartController")

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getUserCart);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, deleteCart);

module.exports = router