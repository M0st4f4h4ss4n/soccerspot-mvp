const express = require('express');
const router = express.Router();

// API routes
router.get('/api/hello', (req, res) => {
  res.send({ message: 'what\'s up Binf' });
});

module.exports = router;