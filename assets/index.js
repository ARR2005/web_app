const express = require('express');
const path = require('path');
const cors = require('cors'); 
const itemRoutes = require('./Route');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 

// Serve static files from public and src
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files from public
app.use(express.static(path.join(__dirname, '../src'))); 
// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Use item routes
app.use(itemRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Serving static files from: ${path.join(__dirname, '../public')} and ${path.join(__dirname, '../src')}`);
});