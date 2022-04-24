const express = require('express');
const weekRouter = express.Router();
const sequelize = require('../db/db.js');

/* GET weeks listing. */
weekRouter.get('/', (req, res, next) => {
    sequelize.models.Week.findAll()
        .then(weeks => res.send(weeks))
        .catch(err => res.error(err));
});

weekRouter.post('/', (req, res, next) => {
    sequelize.models.Week.create(req.body)
        .then(async week => res.send(week))
        .catch(err => next(err));
})

weekRouter.get('/:id', (req, res, next) => {
    sequelize.models.Week.findByPk(req.params.id)
        .then(week => res.send(week))
        .catch(err => next(err));
});

weekRouter.put('/:id', (req, res, next) => {

})


module.exports = weekRouter;