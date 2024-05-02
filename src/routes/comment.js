const express = require("express")
const { viewsComment, postComment, editComment, deleteComment } = require("../Controllers/commentController")
const router = express.Router()
const { authMiddleware } = require("../middleware/auth")

router.get("/:id", viewsComment)
router.post("/product/:productId/comments", authMiddleware, postComment)
router.put("/:id", authMiddleware, editComment)
router.delete("/:id", deleteComment)

module.exports = router