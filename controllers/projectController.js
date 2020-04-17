const db = require('../data/projectdb');

exports.getProjects = (req, res) => {
    db.getProjects().then(projects => {
     let projects2 = projects.map(p => {
        return {id: p.id, name: p.name, description: p.description, completed: p.completed === 0 ? false : true, tasks: JSON.parse(p.tasks), resources: JSON.parse(p.resources)}
    })
        res.status(200).send(projects2);
    }).catch(err => console.log(err));
}

exports.getById = (req, res) => {
    project2 = req.project;
    project2 = {...project2, tasks: JSON.parse(project2.tasks)}
    
    res.status(200).send(project2);
}

exports.addProject = (req, res) => {
    db.addProject(req.newProject).then(p => {
        project = {id: p.id, name: p.name, description: p.description, completed: p.completed === 0 ? false : true, tasks: JSON.parse(p.tasks), resources: JSON.parse(p.resources)}
        res.status(201).send({message: 'Success', project: project});
    }).catch(err => console.log(err));
}

exports.deleteProject = (req, res) => {
    db.deleteProject(req.params.id).then(res.status(200).send('Successfully Deleted')).catch(err => {
        console.log(err);
    });
}
exports.getResources = (req, res) => {
    db.getResources(req.project.resources).then(r => {
        res.status(200).send(r);
    }).catch(err => console.log(err));
}

exports.getAllResources = (req, res) => {
    db.getAllResources().then(r => res.status(200).send(r)).catch(err => console.log(err));
}
exports.addResource = (req, res) => {
    db.addResource(req.newResource).then(r => {
        resource = {id: r.id, name: r.name, description: r.description}
        res.status(200).send({message: 'Success', resource: resource})
    }).catch(err => console.log(err));
}

exports.addTask = (req, res) => {
    db.addTask(req.params.id, req.project).then(p => {
        res.status(201).send({message: 'Success', project: p})
    })
}