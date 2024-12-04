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
  const { Name,Color,Type,Quantity,Created,Time} = req.body;
  item.addItem(Name,Color,Type,Quantity,Created,Time, (err, Item) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).json(Item);
  });
};