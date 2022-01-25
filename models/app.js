const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT ;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));


app.get('*', (req, res) =>{
res.send('Backend is working');
console.log('Welcome to backend')
}
)

app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));