const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please add routes for creating, reading, updating, and deleting comments.
router.get("/", async (req, res) => {
  try {
	const comments = await Comment.find();
	res.json(comments);
  } catch (err) {
	res.status(500).json({ error: err.message });
  }
});

// add another endpoint for deleting a comment by id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        /**
         * Deletes a comment by its ID and returns the deleted comment document.
         *
         * @type {Promise<Comment|null>}
         * @returns {Promise<Comment|null>} The deleted comment document if found, otherwise null.
         */
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted", deletedComment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});