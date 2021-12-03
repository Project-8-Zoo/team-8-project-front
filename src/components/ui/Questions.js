import React from "react";
import { useState, useEffect } from "react";
import './Questions.css';
import API from "../../utils/API.js";

function Questions({tiles}) {
  let questState = {
    animal: "",
    questions: [
        {
            qid: "",
            quest: "",
            answer: [],
            correct: new Number
        }
    ]
};
const [quest, setQuest] = useState(questState);


  const grabllama = (query) => {API.llama(query)
      .then((res) =>{ 
        console.log(res.data[0])
        setQuest({
        animal: res.data[0].animal,
        questions: res.data[0].questions
        
        })})
      .catch ((err) => console.log(err))};
     
  const grabGorilla = (query) =>
    API.gorilla(query)
      .then((res) => setQuest({animal: res.data[0].animal,}))
      .catch ((err) => console.log(err));
     
  const grabBoa = (query) =>
    API.boa(query)
      .then((res) => setQuest({animal: res.data[0].animal,}))
      .catch ((err) => console.log(err));
     
  const grabArfox = (query) =>
    API.arfox(query)
      .then((res) => setQuest({animal: res.data[0].animal,}))
      .catch ((err) => console.log(err));
 useEffect(() => {
    if(tiles[0][0] === 'door'){
      grabllama()
    }
 }, [tiles])
 


const onClick = (e) => {
  if (quest.answer[e] == quest.correct) {


  }
  //if clikced anwer = corrt then point, else, no point
  //add 1 to question index
}

return (
  <body className="CardContainer">
    <div id="QCard">
      <div class="interior">
        <div className="interiorTitle">
          {/*animal*/}
          <h1>{quest.animal}</h1>
        </div>
        {/* what the question */}
        <p>{quest.questions[0].quest}</p>

        <div className="answerContainer">
          {/* answer form */}
          {
                  quest.questions[0].answer.map((ans) =>{
                 return <button onClick>{ans}</button>})
          }

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
