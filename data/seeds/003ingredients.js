exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id:1,Name: 'Milk',recipe_id:1},
        {id:2,Name: 'FrostedFlakes',recipe_id:1},
        {id:3,Name: 'Ramen',recipe_id:2},
        {id:4,Name:"Hot Pockets",recipe_id:3}
      ]);
    });
};
