const Sequelize = require('sequelize');
const dotenv = require('dotenv');
// const utils = require("../helpers/utils");
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_USER_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000000,
        idle: 10000
    },
    // logging: utils.alterTable.includes('sql'),
});


module.exports = sequelize;
