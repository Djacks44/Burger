// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// // Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {
    localhost: {
        host: 'localhost',
        user: 'root',
        password: "",
        database: "burgers_db"
    },
      jawsDB: {
      host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'meq63f89gznuzvte',
      password: 'gpktecofnuj8ghx5',
      database: 'fo9dya5408qz0iat',
      port: '3306'
    }
}

// Selects a connection (can be changed quickly as needed)
var port = require("../server.js");

if (port==3000) {
  var selectedSource = localhost;
}else{
var selectedSource = source.jawsDB;
}


// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  define: { timestamps: false },
  host: selectedSource.host,
  dialect: 'mysql',
  port: selectedSource.port,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// var Sequelize = require('sequelize'), connection;

// if (process.env.JAWSDB_URL){
//   connection = new Sequelize(process.env.JAWSDB_URL);
// }else {
//     connection = new Sequelize('fo9dya5408qz0iat', 'root', 'gpktecofnuj8ghx5', {
//         host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         dialect: 'mysql',
//         port: '3306'
//     });
// }


// Exports the connection for other files to use
module.exports = sequelize;
