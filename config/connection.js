// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {
    localhost: {
        host: 'localhost',
        user: 'root',
        password: "",
        database: "burgers_db"
    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.localhost;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  define: { timestamps: false },
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

if (process.env.JAWSDB_URL){
  connection = new Sequelize(process.env.JAWSDB_URL);
}else {
    connection = new Sequelize('fo9dya5408qz0iat', 'root', 'gpktecofnuj8ghx5', {
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        port: '3306'
    });
}


// Exports the connection for other files to use
module.exports = sequelize;
