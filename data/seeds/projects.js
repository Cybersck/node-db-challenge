
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del().then(function () {return knex('resources').del()})
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Seed Project', description: 'Sample Data', completed: false, tasks: JSON.stringify([{ id: 0, description: 'First Task', notes: 'Additional Info', completed: false },
        { id: 1, description: 'Seconnd Task', notes: 'Additional Info 2', completed: false }]),
      resources: JSON.stringify([0, 3, 4])}
      ]);
    }).then(function () {
      return knex('resources').insert([
        {id: 0, name: 'Computer', description: 'A technological marvel'},
        {id: 1, name: 'Keyboard', description: 'A helpful tool'},
        {id: 2, name: 'Mouse', description: 'A helpful tool'},
        {id: 3, name: 'Desk', description: 'Stylish AND functional!'},
        {id: 4, name: 'Coffee', description: 'What would we do without it?'}
      ])
    });
};
