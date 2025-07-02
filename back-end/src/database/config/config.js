require('dotenv/config');

module.exports = {
  "development": {
    "username": process.env.DB_MYSQL_USER,
    "password": process.env.DB_MYSQL_PASS,
    "database": process.env.DB_MYSQL_NAME,
    "host": process.env.DB_MYSQL_HOST,
    "dialect": "mysql",
    "logging": msg => console.log(msg),
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
