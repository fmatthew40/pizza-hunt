const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

router.route('/:pizzaId/commentId')
.put(addReply)
.delete(removeComment)

router.route('/:pizzaId/:commentId/:replyid').delete(removeReply);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;