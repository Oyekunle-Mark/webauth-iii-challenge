exports.up = knex =>
  knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 50)
      .notNullable()
      .unique();
    tbl.string('password', 250).notNullable();
    tbl.string('department', 50).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
