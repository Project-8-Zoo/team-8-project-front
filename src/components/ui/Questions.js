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
const [i, setI] = useState(0)



  const grabllama = (query) => {API.llama(query)
      .then((res) =>{ 
        setQuest({
        animal: res.data[0].animal,
        questions: res.data[0].questions
        
        })})
      .catch ((err) => console.log(err))};

  const grabBoa = (query) => {API.boa(query)
      .then((res) =>{ 
        setQuest({
        animal: res.data[0].animal,
        questions: res.data[0].questions
        
        })})
      .catch ((err) => console.log(err))};
     
  const grabGorilla = (query) =>
    API.gorilla(query)
      .then((res) => setQuest({animal: res.data[0].animal,}))
      .catch ((err) => console.log(err));
          
  const grabArfox = (query) =>
    API.arfox(query)
      .then((res) => setQuest({animal: res.data[0].animal,}))
      .catch ((err) => console.log(err));

 useEffect(() => {
    if(tiles[3][6]=== 'llama'){
      setI(0)
     return grabllama()
    }else if(tiles[1][5]=== 'boa'){
      setI(0)
      return grabBoa()
    }
 }, [tiles])
 



const OnClick = (e) => {
    if(i===quest.questions.length-1){
     return  console.log('yeet')
    } else if (e.target.textContent == quest.questions[i].correct) {
      setI(i+1)
      console.log(i)
    } else if (e.target.textContent !== quest.questions[i].correct) {
      setI(i+1)
      console.log(i)}
  //if clikced anwer = corrt then point, else, no point
  //add 1 to question index
}

return (
  <body className="CardContainer">
    <div id="QCard">
      <div className="interior">
        <div className="interiorTitle">
          {/*animal*/}
          <h1>{quest.animal}</h1>
        </div>
        {/* what the question */}
        <p>{quest.questions[i].quest}</p>

        <div className="answerContainer btn">
          {/* answer form */}
          {
                  quest.questions[i].answer.map((ans) =>{
                 
                 return <button onClick={OnClick}>{ans}</button>})
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
