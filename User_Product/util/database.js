const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Tushar@9921', {
    dialect:'mysql',
    host: 'localhost'
});


module.exports = sequelize;

