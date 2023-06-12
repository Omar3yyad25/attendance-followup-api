const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const session =  sequelize.define("session",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        sessionCode:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Attended: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return session;
};

