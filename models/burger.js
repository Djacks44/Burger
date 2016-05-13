var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

// "Burger" model that matches up with DB
var Burger = sequelizeConnection.define("burgers", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name: {
		type: Sequelize.STRING,
	},
	devoured: {
		type: Sequelize.BOOLEAN,
	}
});

// Syncs with DB
Burger.sync();
console.log(Burger)
// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
