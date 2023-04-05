const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');
const axios = require('axios');
const app =express();
app.use(bodyparser.urlencoded({extended:true}));

app.post("/yellow",function(req,res)
{
  console.log("yellow");
  res.send();
});

app.get("/",function(req,res)
{

  res.sendFile(__dirname+"/doc.html");
})

app.post("/blue",function(req,res)
{
  console.log("blue");
  res.send();
  
});

app.post("/weather" ,function(req,res)
{
  const options = {
    method: 'GET',
    url: 'https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl',
    headers: {
      'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
  	console.log(response.data);
  }).catch(function (error) {
  	console.error(error);
  });
  // const options = {
  //   method: 'GET',
  //hrllo
  //   url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
  //   params: {q: 'alan walker', per_page: '10', page: '1'},
  //   headers: {
  //     'X-RapidAPI-Key': '410fb685a1mshd1962a798b650efp10ac43jsn2d2e7d369cf4',
  //     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  //   }
  // };
  //
  // axios.request(options).then(function (response) {
  //   // const x=JSON.parse(response);
  //   console.log(response.data);
  //   console.log(response.data.hits);
  //   console.log(response.data.hits[0].result);
  //   console.log(response.data.hits[0].result.title);
  // 	// console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });

const city=req.body.city;
  // const url="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=edfa51a4ff3946732f60307189d4da34&units=metric";
const url="https://api.openweathermap.org/data/2.5/air_pollution/history?lat=21.322130&lon=80.768247&start=1606223802&end=1606482999&appid=edfa51a4ff3946732f60307189d4da34"
  https.get(url,function(resp)
{
  // console.log(res);
  resp.on("data",function(data)
{
  // console.log(data);
   const report =JSON.parse(data);
   // var l=[];
    // l=JSON.parse(report.list);
   console.log(report);
   console.log(report.list);

   console.log(report.list[0].main.temp);
   res.write("<p>"+report.main+"</p>");
      res.write("<h1> "+report.list[0].main.temp+"</h1> ");
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
