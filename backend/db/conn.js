const { MongoClient } = require("../node_modules/mongodb");
require('../node_modules/dotenv').config()
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connectToServer: async function () {
    let response = await client.connect();
    if(response) {
        return "Database Connected"
    } else {
        return "Database not connected"
    }
  },

  listDatabases: async function () {
    const databasesList = await client.db().admin().listDatabases(); 

    if(databasesList) {
        console.log("Databases: ");
        databasesList.databases.forEach(db => {
            console.log(`-${db.name}`);
        })
    } else {
        console.log("Databases not found")
    }

  }
};