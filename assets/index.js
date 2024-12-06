const express = require('express');
const path = require('path');
const cors = require('cors'); 
const itemRoutes = require('./Route');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors()); 

// Middleware to serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use item routes
app.use(itemRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});