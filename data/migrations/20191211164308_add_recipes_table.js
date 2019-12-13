
exports.up = function(knex) {
    return knex.schema.createTable('recipe', function (table) {
        table.increments()
        table.string("name",128).notNullable();
      })
      .createTable("ingredient",function (table){
          table
          .increments();
          table.string("name",128)
          .notNullable()
          table
          .integer("recipe_id",128)
          .unsigned()
          .references("id")
          .inTable("recipe")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
      })
      .createTable("quantity",function(table){
          table.increments()
          table
          .integer("amount")
          table
          .string("measurement",128)
          table
          .integer("ingredients_id")
          .unsigned()
          .references("id")
          .inTable("ingredient")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
         
      })
      
      .createTable("instruction",function(table){
          table.increments()
          table.string("step_1",255)
          .notNullable()
          table.string("step_2",255)
          .notNullable()
          table.string("step_3",255)
          .notNullable()
          table.string("step_4",255)
          table.string("step_5",255)
          table.integer("recipes_id")
          .unsigned()
          .references("id")
          .inTable("recipe")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
    .dropTableIfExists("ingredients")
    .dropTableIfExists("quantity")
    .dropTableIfExists("instructions")
};
