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

    //validation
    if (!name || !color || !type || !quantity) {
        return res.status(400).send('All fields are required.');
    }
    
    const quantityNumber = parseInt(quantity, 10);
    if (isNaN(quantityNumber)) {
        return res.status(400).send('Quantity must be a number.');
    }

    const created = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const time = new Date().toISOString(); // Current date and time in ISO format

    item.addItem(name, color, type, quantityNumber, created, time, (err, item) => {
        if (err) {
            console.error("Error adding item:", err.message);
            return res.status(500).send(err.message);
        }
        console.log("Item added successfully:", item); // This should show the item with a valid item_ID
        res.status(201).json(item);
    });
};