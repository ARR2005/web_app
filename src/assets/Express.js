import express from 'express'; // Only this line should import express
import { create_product, read_product, updated_product, delete_product } from './CRUD.js'; // Ensure the .js extension is included

const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies

app.get('/product', (req, res) => {
    read_product((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/product', (req, res) => {
    const { product_name, price } = req.body;
    create_product(product_name, price, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Product is added ID: ${data.id}`);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});