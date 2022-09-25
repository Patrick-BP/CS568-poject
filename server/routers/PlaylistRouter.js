const express = require('express');
const playListController = require('../controllers/PlaylistController');
const route = express.Router();

route.get('/:userId', playListController.getAll);
route.delete('/:favId', playListController.delById);
route.post('/add', playListController.save);

module.exports = route 