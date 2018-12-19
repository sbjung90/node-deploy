require('dotenv').config();

module.exports = {
  development: {
    username: 'admin',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
  },
  production: {
    username: 'admin',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false,
  },
};
