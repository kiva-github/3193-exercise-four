const express = require("express");
const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send("Hellow, world");
})

app.listen(port, () => console.log('Running an app on Port 4000'))