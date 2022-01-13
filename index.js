// to inject the config vars inside the .env
require('dotenv').config()
const User = require('./model')
const users = [
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
]

const express = require('express')
const app = express()

app.post('/registers', async (req, res) => {
  try{
		console.log(req.username)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})

// heroku wants to set its own port
const port = process.env.PORT || 9000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})