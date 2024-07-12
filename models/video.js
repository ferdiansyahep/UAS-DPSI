const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Video = sequelize.define('Video', {
    videoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topik: {
        type: DataTypes.STRING,
        allowNull: false
    
    }
});

module.exports = Video;