const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const MovieName = sequelize.define('movieName', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    movieName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = MovieName;