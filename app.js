const express = require('express');
const app = express();
const PORT = 9999;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(request, response){
    response.render('index')
});

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}!`);
});