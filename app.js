const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require('./models/database');
const port = process.env.port || 8080;
const app = express();

var corsOptions = {
    origin: "http:// localhost: 8080"
};

app.use (cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/user", require("./routes/user"))

app.get("" , (req, res) => {
    res.json({message: "Routing works"});
})
database.sync({ force: true }).then(() =>{
    app.listen(port, () =>
        console.log(`Serving portmanteau since there were ports ${port}`)
    )
})

