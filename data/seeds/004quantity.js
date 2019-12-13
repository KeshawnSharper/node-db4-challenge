
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id:1,amount:0.5,measurement:"cups",ingredients_id:1},
        {id:2,amount:0.25,measurement:"box",ingredients_id:2},
        {id:3,amount:1.00,measurement:"cups",ingredients_id:3},
        {id:4,amount:7.00,measurement:"rolls",ingredients_id:4}
      ]);
    });
};
