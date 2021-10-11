
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'Bethesda', password:'dishonored3'},
        {username:'Blizzard', password:'diablo4'},

        {username:'Steam', password:'portal3'},
        {username:'NinjaKiwi', password:'bloonsTd7'}
      ]);
    });
};
