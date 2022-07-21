import React from "react";
import "../styles/quotes.css"
import { useEffect, useState } from "react";


function Quotes() {

const [quotesArray, setQuote]=useState([]) 
const quotesAPI_URL="/quoteAPI";

function generatequotes(){
    console.log("button is working");
}

function FetchQuotes(){
    fetch('/quoteAPI')
    .then(res=>{
        return res.json()
    })
    .then((response)=>{
        console.log(response);
    })
   
}
useEffect(()=>{
 FetchQuotes();   
})

  return (
    <div className="quotepage">
        <div className="mainmiddlebox">
            <div className="pagetitle"><h1>Random Quote Generator</h1></div>
            <div className="quote">
                <div className="quotetext">
                <h4>blaa</h4>
                </div>
                <div className="quotebtn">
                    <button id="nextbtn" onClick={()=>generatequotes()}>Generate</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Quotes