import db from '../assets/database.js'; // This should work if database.js exports db as default

// Create
export const create_product = (product_name, price, callback) => {
    const sql = 'INSERT INTO product (product_name, price) VALUES (?, ?)';
    db.run(sql, [product_name, price], function(err) {
        callback(err, { id: this.lastID });
    });
};

export const read_product = (callback) => {
    const sql = 'SELECT * FROM product';
    db.all(sql, [], callback);
};

export const updated_product = (product_id, product_name, price, callback) => {
    const sql = 'UPDATE product SET product_name = ?, price = ? WHERE product_id = ?';
    db.run(sql, [product_name, price, product_id], callback);
};

export const delete_product = (product_id, callback) => {
    const sql = 'DELETE FROM product WHERE product_id = ?';
    db.run(sql, product_id, callback);
};