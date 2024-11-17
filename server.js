const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`));
