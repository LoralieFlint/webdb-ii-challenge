
exports.seed = async function(knex) {
  // re-writes all data old and new without duplicates
  await knex("cars").truncate()

  // creates a bunch of rows at once with an array of objects
  await knex("cars").insert([
    { make: "Kia", model: "Soul", year: 2014, titleStatusClean: true, transmissionType: "automatic" },
    { make: "Ford", model: "Expedition", year: 2000, titleStatusClean: true, transmissionType: "automatic" },
    { make: "Toyota", model: "Camry", year: 2012, titleStatusClean: false, transmissionType: "" },
    { make: "Jeep", model: "Wrangler", year: 2019, titleStatusClean: true, transmissionType: "manual" },
  ])

};
