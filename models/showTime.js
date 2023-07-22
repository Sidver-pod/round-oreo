const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const ShowTime = sequelize.define('showTime', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    showTime: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = ShowTime;