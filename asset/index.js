import express from 'express'; 
import { } from './CRUD.js'; 
import {} from './Route.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});