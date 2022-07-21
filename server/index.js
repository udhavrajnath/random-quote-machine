const express =require('express');
const app=express();
const mysql= require('mysql');

const db =mysql.createConnection({
    user:"testuser",
    host:"localhost",
    password:"testpassword2",
    database:"randomquoteslist"
});


app.listen(3001, ()=>{
    console.log("You are listening on port 3001");
})

app.get("/quoteAPI",(req,res)=>{
    query1 = "SELECT * FROM randomquoteslist. randomquotes";
    const quoteslist=[];
    db.query(query1,(err,result)=>{
        //create a quote object from the data pulled from database that will then be pushed to the quoteslist and sent to the API
        quote={};
        for(var i=0; i<result.length;i++){
            quote["name"]=result[i].name;
            quote["quote"]=result[i].quote;
            quoteslist.push(quote);
        }
        res.send({quoteslist});
    })
    
})