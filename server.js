// server.js
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/routes'); // Routes file containing user routes

const app = express();
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Sync all models with the database and start the server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => console.error('Failed to sync database:', err));
