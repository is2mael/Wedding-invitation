const ChatController = require('../controllers/chat-controller');

const router = require('express').Router();

router.get('/chat', ChatController.findAll);
router.post('/chat', ChatController.createChat);

module.exports = router;