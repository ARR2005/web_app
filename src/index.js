// index.js
import express from 'express'; 
import { create_client, read_clients, update_client, delete_client, create_room, read_rooms, update_room, delete_room } from './CRUD.js'; 

const app = express();
app.use(express.json());

// Client Routes
app.get('/clients', (req, res) => {
    read_clients((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/clients', (req, res) => {
    const { client_name } = req.body;
    create_client(client_name, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Client added with ID: ${data.id}`);
        }
    });
});

// Room Routes
app.get('/rooms', (req, res) => {
    read_rooms((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/rooms', (req, res) => {
    const { room_name, client_id } = req.body;
    create_room(room_name, client_id, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Room added with ID: ${data.id}`);
        }
    });
});

app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const { client_name } = req.body;
    update_client(id, client_name, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(`Client with ID: ${id} updated`);
        }
    });
});

app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    delete_client(id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(`Client with ID: ${id} deleted`);
        }
    });
});

app.put('/rooms/:id', (req, res) => {
    const { id } = req.params;
    const { room_name, client_id } = req.body;
    update_room(id, room_name, client_id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(`Room with ID: ${id} updated`);
        }
    });
});

app.delete('/rooms/:id', (req, res) => {
    const { id } = req.params;
    delete_room(id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(`Room with ID: ${id} deleted`);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});