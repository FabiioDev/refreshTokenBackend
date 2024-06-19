const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const publicRoutes = require('./routes/publicRoutes');
const privateRoutes = require('./routes/privateRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/public', publicRoutes);  //ruta publica.
app.use('/api/auth', authRoutes); //ruta de procesos.
app.use('/api/private', privateRoutes);//ruta privada.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
