const db = require('./dbconfig');

module.exports = {
    getProjects,
    getById,
    addProject,
    deleteProject,
    getResources,
    getAllResources,
    addResource,
    addTask,
    getAllResources
}

function getProjects() {
    return db('projects');
}

function getById(id) {
    return db('projects').where({id}).first();
}

function addProject(project) {
    return db('projects').insert(project).then(ids => {
        return getById(ids[0]);
    });
}
function deleteProject(id) {
    return db('projects').where({id}).del();
}

function getResources(resources) {
    let  resArray = [];
    return db('resources').then(res => {
        JSON.parse(resources).forEach(r => {
            if (res[r]) {
                resArray.push(res[r]);
            }
        })
}).then(() => {
    return resArray;
});
}
function getAllResources(pList) {
    let resArray2d = pList.map(p => {
        return JSON.parse(p.resources);
    })
    let returnArr = [];
    let tempArr = [];
    return db('resources').then(res => {
       resArray2d.forEach(i => {
            i.forEach(n => {
                if (res[n]) {
                    tempArr.push(res[n]);
                }
            })
            returnArr.push(tempArr);
        })
    }).then(() => {
        return returnArr;
    });
}

function addResource(resource) {
    return db('resources').insert(resource);
}

function getAllResources() {
    return db('resources');
}

function addTask(id, project) {
    return db('projects').where({id}).update(project)
}