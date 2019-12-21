
exports.seed = async function(knex) {
  // re-writes all data old and new without duplicates
  await knex("cars").truncate()

  // creates a bunch of rows at once with an array of objects
  await knex("cars").insert([
    { make: "Kia", model: "Soul", year: 2014, titleStatusClean: true, transmissionType: "automatic", color: "White", door: 4, tow: false },
    { make: "Ford", model: "Expedition", year: 2000, titleStatusClean: true, transmissionType: "automatic", color: "blue", door: 4, tow: true },
    { make: "Toyota", model: "Camry", year: 2012, titleStatusClean: false, transmissionType: "", color: "silver", door: 4, tow: false },
    { make: "Jeep", model: "Wrangler", year: 2019, titleStatusClean: true, transmissionType: "manual", color: "black", door: "",  tow: false },
  ])

};
