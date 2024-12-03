import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create Clients table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS clients (
            client_id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_name TEXT
        )`, (err) => {
            if (err) {
                console.error('Error creating clients table: ' + err.message);
            } else {
                console.log('Clients table created or already exists.');
            }
        });

        // Create Rooms table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS rooms (
            room_id INTEGER PRIMARY KEY AUTOINCREMENT,
            room_name TEXT,
            client_id INTEGER,
            FOREIGN KEY(client_id) REFERENCES clients(client_id)
        )`, (err) => {
            if (err) {
                console.error('Error creating rooms table: ' + err.message);
            } else {
                console.log('Rooms table created or already exists.');
            }
        });
    }
});

export default db;