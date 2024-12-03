// CRUD.js
import db from './assets/database.js'; // Ensure this path is correct

// Client CRUD operations
export const create_client = (client_name, callback) => {
    const sql = 'INSERT INTO clients (client_name) VALUES (?)';
    db.run(sql, [client_name], function(err) {
        callback(err, { id: this.lastID });
    });
};

export const read_clients = (callback) => {
    const sql = 'SELECT * FROM clients';
    db.all(sql, [], callback);
};

export const update_client = (client_id, client_name, callback) => {
    const sql = 'UPDATE clients SET client_name = ? WHERE client_id = ?';
    db.run(sql, [client_name, client_id], callback);
};

export const delete_client = (client_id, callback) => {
    const sql = 'DELETE FROM clients WHERE client_id = ?';
    db.run(sql, client_id, callback);
};

// Room CRUD operations
export const create_room = (room_name, client_id, callback) => {
    const sql = 'INSERT INTO rooms (room_name, client_id) VALUES (?, ?)';
    db.run(sql, [room_name, client_id], function(err) {
        callback(err, { id: this.lastID });
    });
};

export const read_rooms = (callback) => {
    const sql = 'SELECT * FROM rooms';
    db.all(sql, [], callback);
};

export const update_room = (room_id, room_name, client_id, callback) => {
    const sql = 'UPDATE rooms SET room_name = ?, client_id = ? WHERE room_id = ?';
    db.run(sql, [room_name, client_id, room_id], callback);
};

export const delete_room = (room_id, callback) => {
    const sql = 'DELETE FROM rooms WHERE room_id = ?';
    db.run(sql, room_id, callback);
};