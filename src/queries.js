const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rpgxizkfksodhg',
  host: 'ec2-54-243-128-95.compute-1.amazonaws.com',
  database: 'dc0qksqj2uljur',
  password: '3bacf6740d5cb317c2b8801b432aa300d04c5d8905ea11039416a1489840ebc9',
  port: 5432,
  ssl: true
})

console.log("Hello to the New World")
// console.log(pool.query('SELECT * FROM users'))

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const createUser = (request, response) => {
//   const { name, email } = request.body
//
//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }
//
// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body
//
//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }
//
// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }
//
module.exports = {
  getUsers,
  getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
}
// getUsers();
