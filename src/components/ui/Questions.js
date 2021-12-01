import React from "react";
import { useState } from "react";
import './Questions.css';
import API from "../../utils/API.js";

function Questions(props) {
  const [quest, setQuest] = useState();


  const grabQuest = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  const handleInputChange = (e) => {
    setQuest(e.target.value);
    console.log(e.target.value);
  }

  const {
    Animal = "",
    Questions = [
      {
        qid = "",
        quest = "",
        answer = [],
        correct = "",
      }
    ]
  } = result;

  return (
    <body className="CardContainer">
      <div id="QCard">
        <div class="interior">
          <div className="interiorTitle">
            {/*animal*/}
            <h1>Tiger</h1>
          </div>
          {/* what the question */}
          <p>question</p>
          <div className="answerContainer">
            {/* answer form */}
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
