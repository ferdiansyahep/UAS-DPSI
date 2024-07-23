const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require('bcryptjs');
const User = require('./user');

const Ortu = sequelize.define('Ortu', {
    ortuID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hubungan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kontak: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
);

module.exports = Ortu;
