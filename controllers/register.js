// controllers/userController.js
const { sequelize } = require('../config/database');
const User = require('../models/users');
const Credentials = require('../models/credentials');
const bycrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const { username, password, email, nama, umur } = req.body;

    // Start a new transaction
    const t = await sequelize.transaction();

    try {

        const hashedPassword = await bycrypt.hash(password, 10);
        // 1. Insert into credentials table
        const newCredentials = await Credentials.create(
            { username, password: hashedPassword },
            { transaction: t }
        );

        // 2. Insert into users table, using credentials_id from the credentials table
        const newUser = await User.create(
            {
                credentials_id: newCredentials.credentials_id,
                email,
                nama,
                umur
            },
            { transaction: t }
        );

        // Commit the transaction if both inserts are successful
        await t.commit();

        // Respond with the created user
        res.status(201).json({
            message: 'User registered successfully!',
            user: newUser
        });
    } catch (error) {
        // Rollback the transaction in case of an error
        await t.rollback();
        res.status(400).json({ error: error.message });
    }
};
