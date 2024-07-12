const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Ulasan = sequelize.define('Ulasan', {
    ulasanID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    videoID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ulasan: {
        type: DataTypes.STRING,
        allowNull: false
    
    }
});

module.exports = Ulasan;