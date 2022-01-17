module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  return 'get users'
}

async function getById() {
  return 'getById user'
}

async function create() {
  return 'create user'
}

async function update() {
  return 'update user'
}

async function remove() {
  return 'delete user'
}
