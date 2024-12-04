const Item = require('./ItemBase/ItemBase.js'); // Import model

// Get all item from the database
exports.getItems = (req, res) => {
  Item.getItems((err, Item) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(Item);
  });
};

// Add a new item to the database
exports.addItem = (req, res) => {
  const { Name,Color,Type,Quantity,Created,Time} = req.body;
  userModel.addItem(Name,Color,Type,Quantity,Created,Time, (err, Item) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).json(Item);
  });
};