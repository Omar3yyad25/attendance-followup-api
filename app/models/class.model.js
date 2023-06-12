const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const class =  sequelize.define("class",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numberofstudents: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        classid: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        professorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    return class;
};