module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        petType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        petPicture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        funFacts: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return Pet;
};