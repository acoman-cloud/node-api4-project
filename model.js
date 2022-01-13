function getId() {
  return users.length+1;
}

const initializeUsers = () => ([
	{
		id: 1,
		user: 'Sam',
		password: '1234'
	},
	{
		id: 2,
		user: 'Lark',
		password: '1234'
	},
	{
		id: 3,
		user: 'Reginold',
		password: '1234'
	},
	{
		id: 4,
		user: 'user4',
		password: '1234'
	}
])

// FAKE IN-MEMORY USERS "TABLE"
let users = initializeUsers()

// DATABASE ACCESS FUNCTIONS
// DATABASE ACCESS FUNCTIONS
// DATABASE ACCESS FUNCTIONS
const find = () => {
  // SELECT * FROM users;
  return Promise.resolve(users)
}

const findById = id => {
  // SELECT * FROM users WHERE id = 1;
  const user = users.find(d => d.id === id)
  return Promise.resolve(user)
}

const insert = ({ username, password }) => {
  // INSERT INTO users (name, bio) VALUES ('foo', 'bar');
  const newUser = { id: getId(), username, password }
  users.push(newUser)
  return Promise.resolve(newUser)
}

const update = (id, changes) => {
  // UPDATE users SET name = 'foo', bio = 'bar WHERE id = 1;
  const user = users.find(user => user.id === id)
  if (!user) return Promise.resolve(null)

  const updatedUser = { ...changes, id }
  users = users.map(d => (d.id === id) ? updatedUser : d)
  return Promise.resolve(updatedUser)
}

const remove = id => {
  // DELETE FROM users WHERE id = 1;
  const user = users.find(user => user.id === id)
  if (!user) return Promise.resolve(null)

  users = users.filter(d => d.id !== id)
  return Promise.resolve(user)
}

const resetDB = () => { // ONLY TESTS USE THIS ONE
  users = initializeUsers()
}

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  resetDB, // ONLY TESTS USE THIS ONE
}
