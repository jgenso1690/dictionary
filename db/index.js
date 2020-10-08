const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

function getAllWords(callback, letter) {
  const queryStr = `SELECT word FROM entries WHERE word like "${letter}%"`;
  connection.query(queryStr, (err, result) => {
    if (err) return err;
    return callback(null, result);
  });
}

function getDefinition(callback, word) {
  const queryStr = `SELECT definition FROM entries where word="${word}"`;
  connection.query(queryStr, (err, result) => {
    if (err) return err;
    return callback(null, result);
  });
}

module.exports = {
  getAllWords, getDefinition, connection,
};
