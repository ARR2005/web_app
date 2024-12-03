// database.js
import sqlite3 from 'sqlite3'; 
const dbName = "HOTtel";

const db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to the Database");
        db.run('CREATE TABLE IF NOT EXISTS clients (client_id INTEGER PRIMARY KEY AUTOINCREMENT, client_name TEXT)', (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Clients table created or already exists");
            }
        });
        db.run('CREATE TABLE IF NOT EXISTS rooms (room_id INTEGER PRIMARY KEY AUTOINCREMENT, room_name TEXT, client_id INTEGER, FOREIGN KEY(client_id) REFERENCES clients(client_id))', (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Rooms table created or already exists");
            }
        });
    }
});

export default db;