
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id:1,name: 'Frosted Flakes'},
        {id:2,name: 'Ramen Noodles'},
        {id:3,name: 'Hot Pockets'}
      ]);
    });
};
