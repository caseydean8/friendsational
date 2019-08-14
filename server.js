const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


// set port listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})