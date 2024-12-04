const express = require('express');
const router = express.Router();
const itemControl = require('./Controller.js');

// Route to fetch all items
router.get('/api/item', itemControl.getItem);

// Route to add a new item
router.post('/api/item', itemControl.addItem);

module.exports = router;