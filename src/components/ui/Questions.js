import React from "react";
import './Questions.css';

function Questions() {
  return (
    <body className="CardContainer">
    <div id="QCard">
        <div class="interior">
            <div className="interiorTitle">
            <h1>Tiger</h1>
            </div>
            <p>Does a Tiger have 4 legs?</p>
        <div className="answerContainer">
            <button className="yesBtn">Yes</button>
            <button className="noBtn">No</button>
            </div>
        </div>
        
      <div id="spade">
        <span id="ace-left">A</span>

        <span class="small-spade left">&spades;</span>
        <span id="ace-right">A</span>
        <span class="small-spade right">&spades;</span>
      </div>
    </div>
  </body>
  );
}

export default Questions;
