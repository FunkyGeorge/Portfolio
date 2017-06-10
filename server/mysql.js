var Promise = require('bluebird');
var using = Promise.using;
var mysql = require('mysql2/promise');
var SqlString = require('sqlstring');

var pool = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root', 
	database: 'mykolandness',
	Promise: Promise
});

function getConnection() {
	return pool.getConnection().disposer(function (connection) {
		connection.release();
	});
}

module.exports = getConnection;