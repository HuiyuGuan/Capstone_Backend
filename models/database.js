const { password } = require('pg/lib/defaults');
const Sequelize = require('sequelize')
const pkg = require('../package.json')

// const database = new Sequelize(
//   // postgres://myuser:mypassword@myhost:5432/mydatabasename
//     process.env.DATABASE_URL|| `postgres://postgres:sql@localhost:5432/${pkg.name}`,
//     {
//         dialect : 'postgres',
//         logging : false
//     }
// )
const database = new Sequelize('capstone_backend', 'postgres', 'password', {   
  host: 'localhost',  
  dialect:'postgres'
}) 

// const database = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// }
// );

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = database;