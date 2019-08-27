let express=require('express');
let app=express();
let path2Views=__dirname+"/views/";
let bodyParser=require('body-parser');
app.engine("html", require("ejs").renderFile);
app.set('view engine','html')
app.use(express.static('views'))
let db=[];

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.render(path2Views+"index.html");
});

app.get('/addTask',function(req,res){
    res.render(path2Views+"newTask.html");
});


app.post('/newTaskRecord',function(req,res){
    console.log(req.body);
    db.push(req.body);

    res.render(path2Views+"index.html");

    
});

app.get('/showAllTasks',(req,res)=>{
    res.render(path2Views+"showTask.html",{
        task:db
    })

})
app.listen(8080);