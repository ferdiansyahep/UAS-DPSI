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
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
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

Ortu.belongsTo(User, { foreignKey: 'id' });
User.hasMany(Ortu, { foreignKey: 'id' });

module.exports = Ortu;
