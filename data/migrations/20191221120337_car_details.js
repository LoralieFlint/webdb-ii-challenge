exports.up = async function(knex) {
  await knex.schema.alterTable("cars", table => {
    table.text("color")
    table.integer("doors");
    table
      .boolean("tow")
      .defaultTo(false)
  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable("cars", table => {
    table.dropColumn("color");
  });
};
