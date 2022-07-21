import React from "react";
import "../styles/quotes.css"
import { useEffect, useState } from "react";


function Quotes() {

const [quotesArray, setQuote]=useState([]) 
const [displayquote,setdisplayedQuote]=useState("")
const [displayauthor,setdisplayedAuthor]=useState("")
const quotesAPI_URL="/quoteAPI";

function generatequotes(){
    console.log("button is working");
    //generate a random number betwwen 0-16 that will be passed as index in the the quote state array
    let myindex = Math.floor((Math.random()*17));
    console.log(myindex);
    if(quotesArray.length>0){
        setdisplayedQuote(quotesArray[myindex].quote);
        setdisplayedAuthor(quotesArray[myindex].name);
    }

}

function FetchQuotes(){
    fetch('http://localhost:3001/quoteAPI')
    .then(res=>{
        return res.json()
    })
    .then((response)=>{
        console.log(response);
        setQuote(response.quoteslist);
        console.log("this is the quote state now", quotesArray);
    })
   
}
useEffect(()=>{
 FetchQuotes();   
},[quotesAPI_URL])

  return (
    <div className="quotepage">
        <div className="mainmiddlebox">
            <div className="pagetitle"><h1 id="pagetitle">Random Quote Generator</h1></div>
            <div className="quote">
                <div className="quotetext">
                <h2 id="quotetextdesc">"{displayquote}" </h2><br/><h4 id="quoteauthordesc">~ <strong>{displayauthor}</strong></h4>
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