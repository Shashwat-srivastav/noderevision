const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');
const app =express();
app.use(bodyparser.urlencoded({extended:true}));



app.get("/",function(req,res)
{

  res.sendFile(__dirname+"/doc.html");
})



app.post("/weather",function(req,res)
{

const city=req.body.city;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=edfa51a4ff3946732f60307189d4da34&units=metric";

  https.get(url,function(resp)
{
  // console.log(res);
  resp.on("data",function(data)
{
  // console.log(data);
   const report =JSON.parse(data);
   console.log(report);
   console.log(report.main.temp);
   res.write("<p>"+report.main+"</p>");
      res.write("<h1> "+report.main.temp+"</h1> ");
   res.send();
   // res.send("<h1> "+report.main.temp+"</h1> ");
})

})

});

app.post("/bmi",function(req,res){
  var h =req.body.height;
  var w =req.body.weight;
  console.log(h+w);
  res.send("nice");
});


app.post("/",function(req,res){
  console.log(
    req.body.num1+req.body.num2
  );
  res.send("good");
});




app.listen(3000,function(){
  console.log("server online");
});
