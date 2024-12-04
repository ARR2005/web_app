const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ItemBase.db', (err) => {
    if (err) {
        return console.error("Error opening database " + err.message);
    } else {
        console.log("Connected to database");
        db.run(`CREATE TABLE IF NOT EXISTS Items (
            item_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT,
            Color TEXT,
            Type TEXT,
            Quantity INT,
            Created DATE,
            Time DATETIME
        )`, (err) => {
            if (err) {
                return console.error("error adding constraint" + err.message);
            } else {
                console.log("Items Table created or already exists");
            }
        });
    }
});

const getItem = (callback) => {
    db.all(`SELECT * FROM Items`, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

const addItem = (Name, Color, Type, Quantity, Created, Time, callback) => {
    const sql = `INSERT INTO Items (Name, Color, Type, Quantity, Created, Time) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [Name, Color, Type, Quantity, Created, Time], function(err) {
        if (err) {
            console.error("Error inserting item: ", err.message); 
            return callback(err);
        }
        callback(null, { item_ID: this.lastID, Name, Color, Type, Quantity, Created, Time });
    });
};

module.exports = {
    getItem,
    addItem
};