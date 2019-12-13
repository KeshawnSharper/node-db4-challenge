
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        {id:1,step_1:"Find a bowl and spoon",step_2:"Pour the cereal",step_3:"Remeber to pour the cereal first then milk",recipes_id:1},
        {id:2,step_1:"Find a bowl and fork",step_2:"Pour the ramen and water ",step_3:"Heat it in the microwave for 3 minutes",step_4:"Pour the Water out",step_5:"Pour the sauce in and enjoy your meal",recipes_id:2},
        {id:3,step_1:"Find a plate",step_2:"Pour the Hot Pockets on the plate",step_3:"Heat it in the microwave for 3 minutes",recipes_id:3},
      ]);
    });
};
