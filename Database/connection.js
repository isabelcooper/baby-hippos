const Pool = require("pg").Pool;
const pool = new Pool({
  user: "rpgxizkfksodhg",
  host: "ec2-54-243-128-95.compute-1.amazonaws.com",
  database: "dc0qksqj2uljur",
  password: "3bacf6740d5cb317c2b8801b432aa300d04c5d8905ea11039416a1489840ebc9",
  port: 5432,
  ssl: true
});

console.log("Hello to the New World");

const connect = () => {
  return pool
}


const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    // JSON.stringify(thing)

  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSpaces = (request, response) => {
  pool.query('SELECT * FROM spaces', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSpaceById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(`SELECT * FROM spaces WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSpace = (request, response) => {
  const { name, description, ppn, location, bedrooms, beds } = request.body

  pool.query(`INSERT INTO spaces (name, description, ppn, location, bedrooms, beds) VALUES (
    '${name}',
    '${description}',
    '${ppn}',
    '${location}',
    '${bedrooms}',
    '${beds}')`,
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Submission Successful`)
  })
}



module.exports = {
  getUsers,
  getUserById,
  getSpaces,
  getSpaceById,
  createSpace
}
