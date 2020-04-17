const db = require('../data/projectdb');

exports.validateId = (req, res, next) => {
    db.getById(req.params.id).then(id => {
        if (id === undefined) {
            res.status(404).send('Invalid ID');
            return;
        } else {
            req.project = id;
            next();
        }
    }).catch(err => console.log(err));
}

exports.validateProject = (req, res, next) => {
    if (req.body.name === undefined) {
        res.status(400).send('Missing Required Data: Name');
        return;
    } else {
        project = {
            name: req.body.name,
            description: req.body.description === undefined ? '' : req.body.description,
            tasks: req.body.tasks === undefined ? JSON.stringify([]) : JSON.stringify(req.body.tasks),
            resources: req.body.resources === undefined ? JSON.stringify([]) : JSON.stringify(req.body.resources)
        }
        req.newProject = project;
        next();
    }

}

exports.validateResource = (req, res, next) => {
    if (req.body.name === undefined) {
        res.status(400).send('Missing Required Data: Name');
        return;
    } else {
        resource = {
            name: req.body.name,
            description: req.body.description === undefined ? '' : req.body.description
        }
        req.newResource = resource;
        next();
    }
}

exports.validateTask = (req, res, next) => {
    if (req.body.description === undefined) {
        res.status(400).send('Missing Required Data: Description');
        return;
    } else {
        task = {
            id: JSON.parse(req.project.tasks).length,
            description: req.body.description,
            notes: req.body.notes === undefined ? '' : req.body.notes,
            completed: false
        }
        console.log(typeof(req.project.tasks));
        newTasks = JSON.parse(req.project.tasks);
        newTasks.push(task);
        req.project.tasks = JSON.stringify(newTasks);
        next();
    }
}