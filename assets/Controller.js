const item = require('./ItemBase/ItemBase.js'); 

// Get all items from the database
exports.getItem = (req, res) => {
    item.getItem((err, items) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(items);
    });
};

// Add a new item to the database
exports.addItem = (req, res) => {
  console.log('Request body:', req.body); // Log the request body
  const { name, color, type, quantity } = req.body;

  item.addItem(name, color, type, quantity, created, time, (err, item) => {
      if (err) {
          return res.status(500).send(err.message);
      }
      res.status(201).json(item);
  });
};