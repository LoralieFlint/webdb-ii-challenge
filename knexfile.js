// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true, // necessary when using SQLite
    migrations: {
      directory: './data/migrations'
    }
  }
};
