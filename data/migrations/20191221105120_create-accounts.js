exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
      table.increments("VIN")
      table.text("make").notNull().unique()
      table.text("model").notNull().unique()
      table.integer("year")
      table.boolean("titleStatusClean").defaultTo(false)
      table.text("transmissionType")
    })
  }

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
