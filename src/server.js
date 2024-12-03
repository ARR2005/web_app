import express from 'express';
import { create_client, read_clients, update_client, delete_client, create_room, read_rooms, update_room, delete_room } from './CRUD.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Client Routes
app.post('/clients', (req, res) => {
    create_client(req.body.client_name, (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.status(201).send(result);
    });
});

app.get('/clients', (req, res) => {
    read_clients((err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.send(rows);
    });
});

app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const { client_name } = req.body;
    update_client(id, client_name, (err) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).send(`Client with ID: ${id} updated`);
    });
});

app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    delete_client(id, (err) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).send(`Client with ID: ${id} deleted`);
    });
});

// Room Routes
app.post('/rooms', (req, res) => {
    const { room_name, client_id } = req.body;
    create_room(room_name, client_id, (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.status(201).send(result);
    });
});

app.get('/rooms', (req, res) => {
    read_rooms((err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.send(rows);
    });
});

app.put('/rooms/:id', (req, res) => {
    const { id } = req.params;
    const { room_name, client_id } = req.body;
    update_room(id, room_name, client_id, (err) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).send(`Room with ID: ${id} updated`);
    });
});

app.delete('/rooms/:id', (req, res) => {
    const { id } = req.params;
    delete_room(id, (err) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).send(`Room with ID: ${id} deleted`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});