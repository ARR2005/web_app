// server.js
import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'assets', 'database.sqlite'));

// Create a table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
)`);

// CRUD Operations

// Create
app.post('/api/items', (req, res) => {
    const { name } = req.body;
    db.run(`INSERT INTO items (name) VALUES (?)`, [name], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json({ id: this.lastID, name });
    });
});

// Read
app.get('/api/items', (req, res) => {
    db.all(`SELECT * FROM items`, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(rows);
    });
});

// Update
app.patch('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.run(`UPDATE items SET name = ? WHERE id = ?`, [name, id], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json({ id, name });
    });
});

// Delete
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM items WHERE id = ?`, id, function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(204).send();
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});