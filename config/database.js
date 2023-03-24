import * as dotenv from 'dotenv';
import mysql from 'mysql';
dotenv.config();

// create the connection to database

const db = mysql.createPool({
  connectionLimit: 100,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

export const createNewConnection = () => {
  db.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      console.log(' Error getting mysql_pool connection: ' + err);
      throw err;
    }
  });
};

export const releaseConnection = () => {
  db.release();
};

export default db;
