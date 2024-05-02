const Product = require("../models/Product")
const FuseJs = require("fuse.js")

const search = async(req, res) => {
	const searchQuery = req.query.query
	try{
		const products = await Product.find()

		if(!products){
			res.status(404).json({
				message: "Mahsulotlar topilmadi" 
			})
		}

		const options = {
			includeScore: true,
			keys: ["name"]
		}

		const fuse = new FuseJs(products, options)

		const result = fuse.search(searchQuery)

		res.status(201).json({
			message: "Search result",
			result
		})

	}catch(error){
		console.error(error);
		res.status(500).json({ message: "Nimadir xato ketdi. Iltimos keyinroq qayta urinib ko'ring!" });
	}
}

module.exports = {
		search
}