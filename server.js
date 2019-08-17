// npms
const express = require('express')

// creating express server
const app = express()

// set a port
const PORT = process.env.PORT || 3000

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// set port listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})