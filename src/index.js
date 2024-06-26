require("express-async-errors");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/dbConnect.js");
const app = express();
const port = 5000;

const auth = require('./routes/auth');
const colorRouter = require('./routes/color.js')
const upload = require('./routes/upload.js');
const product = require("./routes/product.js");
const brand = require("./routes/brand.js");
const category = require("./routes/category.js")
const ram = require("./routes/ram.js")
const processor = require("./routes/processor.js");
const comment = require("./routes/comment.js")
const search = require("./routes/search.js")
const cart = require("./routes/cart.js")


app.use(express.json());
app.use(cors({ orign: "*", credentials: true }));
// allowing requests from anywhere

// Connecting to MongoDB
dbConnect();

app.use((err, req, res, next) => {
  if (err) {
    return res
      .status(500)
      .json({ status: "serverError", error: err.toString() });
  }
  next();
});

app.use('/api/auth',auth );
app.use('/api/color', colorRouter);
app.use('/api/upload', upload);
app.use('/api/product', product);
app.use('/api/brand', brand);
app.use("/api/category", category);
app.use("/api/ram", ram);
app.use("/api/processor", processor);
app.use("/api/comment", comment);
app.use("/api/search", search);
app.use("/api/cart", cart);
// Running server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
