const Product = require("../models/Product")
const Cart = require("../models/Cart")
const User = require("../models/User")

const addToCart = async(req, res) => {
  const { productId, quantity, color, price } = req.body
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(400).json({ message: `Berilgan ID ga mos mahsulot topilmadi!` });
    }

    if(quantity > (product.quantity - product.sold)){
      return res.status(400).json({message: `Mahsulot soni ${quantity} ta emas`})
    }

    if(color != product.color){
      return res.status(400).json({message: `Berilgan rang ushbu mahsulotga tegishli emas`})
    }
    
    if(price !== product.price){
      return res.status(400).json({message: `Berilgan narx ushbu mahsulotga tegishli emas`})
    }

    const newCart = new Cart({
      productId,
      userId: req.user._Id,
      quantity,
      color: `${product.color}`,
      price, 
    })
    
    const checkUser = await User.findById(req.user.id)

    if(!checkUser){
      return res.status(400).json({message: `Bunday user topilmadi`})
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, 
      {$push: {cart: newCart}}, 
      {new: true}
    )

    if(!updatedUser){
      return res.status(400).json({message: `Savatchada qo'shishda xatolik`})
    }

    res.status(201).json({ message: "Savatchaga muvaffaqiyatli qo'shildi!", newCart });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Nimadir xato ketdi. Iltimos keyinroq qayta urinib ko'ring!",
    });
  }
}

const getUserCart = async (req, res) => {
  try {
    const productsInTheCart = await User.findById(req.user._Id)

    if(!productsInTheCart.cart) {
      return res.status(400).json({message: "Mahsulotlar savatchasi bo'sh"})
    }

    res.status(200).json({message: "Savatchadagi mahsulotlar", productsInTheCart})
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Nimadir xato ketdi. Iltimos keyinroq qayta urinib ko'ring!",
    });
  }
}

const deleteCart = async (req, res) => { 
  const { cartItemId } = req.params
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Nimadir xato ketdi. Iltimos keyinroq qayta urinib ko'ring!",
    });
  }
}

module.exports = {
  addToCart,
  getUserCart,
  deleteCart
}