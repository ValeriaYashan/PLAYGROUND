module.exports = (sequelize, dataTypes) => {
    let alias = 'Material';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'actors'
    }
    const Material = sequelize.define(alias, cols, config); 

    Material.associate = function (models) {
        Material.belongsToMany(models.Product, { // models.Product-> Products es el valor de alias en product.js
            as: "products",
            through: 'material_product',
            foreignKey: 'material_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Material
};