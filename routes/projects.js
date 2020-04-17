var express = require('express');
var router = express.Router();
var projectMiddle = require('../middleware/projectMiddle');
var projectController = require('../controllers/projectController');

/* GET home page. */
router.get('/p/', projectController.getProjects);
router.get('/p/:id', projectMiddle.validateId, projectController.getById);
router.post('/p/', projectMiddle.validateProject, projectController.addProject);
router.delete('/p/:id', projectMiddle.validateId, projectController.deleteProject);
router.post('/p/:id/task', projectMiddle.validateId, projectMiddle.validateTask, projectController.addTask);

router.post('/:id/resources', projectMiddle.validateId, projectController.addResource);
router.get('/:id/resources', projectMiddle.validateId, projectController.getResources);
router.get('/resources', projectController.getAllResources);
router.post('/resources', projectMiddle.validateResource, projectController.addResource)


module.exports = router;
