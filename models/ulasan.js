const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Video = require('./video');
const User = require('./user');

const Ulasan = sequelize.define('Ulasan', {
    ulasanID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    videoID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ulasan: {
        type: DataTypes.STRING,
        allowNull: false
    
    }
});

module.exports = Ulasan;