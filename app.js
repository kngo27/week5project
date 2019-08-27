var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
let bodyParser = require('body-parser');

let db = [];



// app.get('/',(req, res) => {
//     res.render("showTasks.html")
// })



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.render('showTasks.html')
});


app.post('/data', function (req, res) {
    console.log(req.body.taskId);
    console.log(req.body.dueDate);
    console.log(req.body.taskDesc);
    res.send('Thank You')
})


db.push({
    carId: 3,
    carMake: 'Audi',
    carModel: 'A6',
    carYear: 2019
});

app.get('/', function (req, res) {
    res.render('showTasks.html', {carDb: db});
});

app.listen(8080);

