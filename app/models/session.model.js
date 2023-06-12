const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const session =  sequelize.define("session",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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

