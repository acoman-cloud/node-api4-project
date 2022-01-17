// to inject the config vars inside the .env
require('dotenv').config()
const User = require('./model')

const express = require('express')
const app = express()

app.post('/registers', (req, res) => {
	User.create()
		.then(ers=>{
				res.status(200).json(ers)
			})
		.catch(err=>{
			res.status(500).json({message:'internal database problem'})
		})
})

app.get('/users', (req, res) => {
  User.get()
		.then(use=>{
			res.json(use)
		})
		.catch(err=>{
			res.status(500).json({message:'internal functional problem'})
		})
})

app.delete('/users', (req, res) => {
  User.remove()
		.then(use=>{
			res.json(use)
		})
		.catch(err=>{
			res.status(500).json({message:'internal functional problem'})
		})
})


app.get('/hello', (req, res) => {
  res.json('hey there')
})

// heroku wants to set its own port
const port = process.env.PORT || 9000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})