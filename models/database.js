const Sequelize = require('sequelize')
const pkg = require('../package.json')

const database = new Sequelize(
  // postgres://myuser:mypassword@myhost:5432/mydatabasename
    process.env.DATABASE_url || `postgres://postgres:sql@localhost:5432/${pkg.name}`,
    {
        dialect : 'postgres',
        logging : false
    }
)


database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = database;