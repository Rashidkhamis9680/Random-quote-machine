import React, { useState } from "react";
import { BsFacebook, BsTwitter, BsQuote } from "react-icons/bs";
import { QUOTES } from "../Quote";
 
 

 
export default Quote;
export function Quote(props) {
    const [quote, setQuote] = useState (QUOTES[0]);

    const shuffle = QUOTES.sort( () => Math.random() - 0.5)

   
    function handleClick() {
    setQuote(shuffle[0])
    }
    return (
        <div id='quote-box'>

            <div id='quote'>
                <p id='text'><BsQuote />{quote.tittle}</p>
            </div>



            <div className='name'>
                <p id="author">~ {quote.name}</p>
            </div>


            <div className="btn__icons">


                <div className="icons">

                    <div className='twitter'>
                        <a href='https://twitter.com/intent/tweet' id="tweet-quote" target="_blank"><BsTwitter /></a>
                        </div>
                    {/* <div className='twitter'><a href='https://facebook.com/intent/tweet' target="_blank" id="tweet-quote"><BsFacebook /></a></div> */}
                </div>
 
                <button id='new-quote' onClick={handleClick}>Next</button>
          </div>
            

        </div>
    )
    };
