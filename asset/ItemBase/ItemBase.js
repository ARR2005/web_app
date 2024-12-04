const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./ItemBase.db' , (err) => {
    if (err) {
        return console.error("Error opening database " + err.message)    
    }else {
        console.log("Connected to database");

        //creating Items Table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS Items (
            ID INT PRIMARY KEY AUTO_INCREMENT,
            Name TEXT,
            Color TEXT,
            Type TEXT,
            Quantity INT,
            Created Date,
            Time DATETIME
            )` , (err) => {
            if (err) {
                return console.error("error adding constraint" + err.message)
            }else {
                console.log("Items Table created or already exists");
            }
        })

    }
});

module.exports = db;