const express = require('express');
const path = require('path'); 
const app = express();

// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 


app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(3000)