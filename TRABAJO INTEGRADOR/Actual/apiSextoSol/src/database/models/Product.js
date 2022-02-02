module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(7, 2).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(300).UNSIGNED,
            allowNull: false
        },
        purchase_date: {   /*AGREGAR EN DB*/
            type: dataTypes.DATEONLY,
            allowNull: false
        },
     
        category_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'movies'
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { // models.Category -> CAtegories es el valor de alias en categories.js
            as: "category",
            foreignKey: "category_id"
        })

        Product.belongsToMany(models.Material, { // models.Material -> Materials es el valor de alias en material.js
            as: "materials",
            through: 'material_product',
            foreignKey: 'product_id',
            otherKey: 'material_id',
            timestamps: false
        })
    }

    return Product
};