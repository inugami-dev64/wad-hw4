// imports
const express = require('express')
const cors = require('cors')
const { routePosts } = require('./api/v1/posts')
const app = express();

app.use(cors())
app.use(express.json())

// subrouter for posts CRUD
app.use('/api/v1/posts', require('./api/v1/posts'));

// subrouter for authenticator
app.use('/api/v1/auth', require('./api/v1/auth'));

// Start the server at specified port
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})