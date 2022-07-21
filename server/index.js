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

app.get("/",(req,res)=>{

    const sqlQurry1="INSERT INTO randomquptes (name, quote) VALUES ('Brittany Murphy','Everybody has difficult years, but a lot of times the difficult years end up being the greatest years of your whole entire life, if you survive them');";

    db.query(sqlQurry1,(err,result)=>{
        res.send("Values inserted");
    })
    
})