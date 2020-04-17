
exports.up = function(knex) {
  return knex.schema.createTable('projects', t => {
      t.increments();
      t.string('name').notNullable();
      t.string('description').nullable();
      t.boolean('completed').notNullable().defaultTo(false);
      t.json('tasks').nullable().defaultTo(JSON.stringify([]));
      t.json('resources').nullable().defaultTo(JSON.stringify([]))
  }).createTable('resources', t => {
      t.increments();
      t.string('name').notNullable().unique();
      t.string('description').nullable();
  });
};

exports.down = function(knex) {
  
};
