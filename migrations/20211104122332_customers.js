exports.up = async function (knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  return knex.schema.createTable('customer', db => {
    db.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    db.string('firstName').nullable()
    db.string('lastName').nullable()
    db.string('address').nullable()
    db.string('status').defaultTo(false)
    db.timestamp('created_at').defaultTo(knex.fn.now())
    db.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('customer')
};
