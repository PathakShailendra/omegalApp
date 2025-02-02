const express = require('express');
const router = express.Router();

// Add route for root path
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/chat', (req, res) => {
    res.render('chat');
  });


module.exports = router;
