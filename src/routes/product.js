const express = require("express");
const { createProduct, updateProduct, viewsProduct, viewProduct, deleteProduct, paginations, filterPrice, addToWishlist } = require("../Controllers/productController.js");


const router = express.Router();

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.get('/', viewsProduct);

router.delete('/:id', deleteProduct);


router.get("/get-prod", paginations)
router.get("/get-price", filterPrice)


router.post("/wishlist",addToWishlist)





router.get('/:id', viewProduct);

module.exports = router