const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
const Categories = db.Category;
const Materials = db.Material;

const productsController = {
    'list': (req, res) => {
        db.Product.findAll({
            include: ['category']
        })
            .then(products => {
                res.render('productsList.ejs', {products})
            })
    },
    /*'detail': (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(product => {
                res.render('productDetail.ejs', {product});
            });
    },
    'new': (req, res) => {
        db.Product.findAll({
            order : [
                ['purchase_date', 'DESC']
            ],
            limit: 5
        })
            .then(products => {
                res.render('newestProducts', {products});
            });
    },
    'recomended': (req, res) => {
        db.Product.findAll({
            include: ['category'],
            where: {
                price: {[db.Sequelize.Op.gte] : 500}
            },
            order: [
                ['price', 'DESC']
            ]
        })
            .then(products => {
                res.render('recommendedProducts.ejs', {products});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promCategories = Categories.findAll();
        let promMaterials = Materials.findAll();
        
        Promise
        .all([promCategories, promMaterials])
        .then(([allCategories, allMaterials]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productsAdd'), {allCategories,allMaterials})})
        .catch(error => res.send(error))
    },
    create: function (req,res) {
        Products
        .create(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                purchase_date: req.body.purchase_date,  /*agregar a db
                category_id: req.body.category_id
            }
        )
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
    },
    edit: function(req,res) {
        let productId = req.params.id;
        let promProducts = Products.findByPk(productId,{include: ['category','material']});
        let promCategories = Categories.findAll();
        let promMaterials = Materials.findAll();
        Promise
        .all([promProducts, promCategories, promMaterials])
        .then(([Product, allCategories, allMaterials]) => {
            Product.purchase_date = moment(Movie.purchase_date).format('L');/*ver saque release pero puede ser ingreso
            return res.render(path.resolve(__dirname, '..', 'views',  'productsEdit'), {Product,allCategories,allMaterials})})
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let productId = req.params.id;
        Products
        .update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                purchase_date: req.body.purchase_date,  /*agregar a db
                category_id: req.body.category_id
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
    },
    delete: function (req,res) {
        let productId = req.params.id;
        Products
        .findByPk(productId)
        .then(Product => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productsDelete'), {Product})})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let productId = req.params.id;
        Products
        .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/products')})
        .catch(error => res.send(error)) 
    },
    createProduct: async function(req, res) {
       const productCreated = await  Product.create(req.body)
        return res.json({ data: productCreated }).status(201);
    },
    deleteProduct: async function (req,res) {
        try {
            let productId = req.params.id;
            const response = await Products
            .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
            throw new Error('jfsdkjsdafjkn')
            return res.json({ data: { deleted: true, plantaId }}).status(200)
        } catch(err) {
            return res.json({ data: { deleted: false, err }})
        }
        
    },*/
}

module.exports = productsController;