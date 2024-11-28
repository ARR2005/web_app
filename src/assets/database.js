import sqlite3 from 'sqlite3'; // Ensure you have the correct import syntax for sqlite3
const dbName = "production_management";

const db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to the Database");
        db.run('CREATE TABLE IF NOT EXISTS product (product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, price INTEGER)', (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Table created or already exists");
            }
        });
    }
});

// Correctly export the db instance as default
export default db; // Ensure this line is present