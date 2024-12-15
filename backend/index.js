const express = require('express')
const app = express();

// hello world route basically
app.get('/', (req, res) => {
    res.send("Server is running");
});

// Start the server at specified port
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})