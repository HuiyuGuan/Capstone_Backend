const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
    origin: "http:// localhost: 8081"
};

app.use (cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , (req, res) => {
    res.json({message: "Routing works"});
})
 const port = process.env.port || 8080
app.listen(port, () => console.log(`listening on port ${port}`));