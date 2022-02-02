const db = require('../database/models');
const sequelize = db.sequelize;


const categoriesController = {
    'list': (req, res) => {
        db.Category.findAll()
            .then(categories => {
                if(req.url.includes('api'))
                return res.json({ meta: { status: 'ok', error: false } , data: categories }).status()
                else 
                res.render('categoriesList.ejs', {categories})
            })
    },
    /*'detail': (req, res) => {
        db.Category.findByPk(req.params.id)
            .then(Category => {
                res.render('categoriesDetail.ejs', {category});
            });
    },
    getCategoriesList: (req, res) => {
        return db.Category.findAll()
            .then(categories => {
                return res.json({ meta: { status: 'ok', error: false } , data: categories }).status()
                //res.render('categoriesList.ejs', {categories})
            })
    },
    getGenreDetail: (req, res) => {
        return db.Category.findByPk(req.params.id)
        .then(genre => {
            return res.
                json({ meta: { status: 'ok', error: false } , data: categories })
                .status()
        });
    },*/

}

module.exports = categoriesController;