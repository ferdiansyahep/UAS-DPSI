// controllers/authController.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register(req, res, next) {
    try {
        const { username, password, nama, role } = req.body;

        // Validasi input
        if (!username || !password || !nama || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newUser = await User.create({ username, password, nama, role });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        // Tangkap kesalahan validasi Sequelize
        if (err.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: err.errors.map(e => e.message).join(', ') });
        }
        // Tangkap kesalahan unik
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Username already in use' });
        }
        console.error('Registration error:', err);  // Log kesalahan untuk debugging
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ id: user.id, nama: user.nama, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        next(err);
    }
}

module.exports = { register, login };
