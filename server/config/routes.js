const dogController = require('../controllers/dogs');

module.exports = app => {
    app
        .get('/', dogController.index)
        .get('/new', dogController.new)
        .get('/:id', dogController.show)
        .get('/:id/edit', dogController.edit)
        .post('/', dogController.create)
        .post('/:id', dogController.update)
        .post('/:id/delete', dogController.destroy);
};
