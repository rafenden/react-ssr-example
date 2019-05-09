const express = require('express')
const app = express()
const path = require('path')

const template = require('./views/template')
const ssr = require('./views/server')

// Serving assets
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000...')
})

// Our data model
const data = require('./assets/data.json')

const initialState = {
  isFetching: false,
  activities: data,
}

// Server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
})
