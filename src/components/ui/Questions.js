import React from "react";
import { useState, useEffect } from "react";
import './Questions.css';
import API from "../../utils/API.js";




function Questions({ tiles, highscore, setHighscore }) {
  let questState = {
    animal: "Zoo Home",
    questions: [
      {
        qid: "",
        quest: `Can you find all four enclosers`,
        answer: [],
        correct: ''
      }
    ]
  };
  const [quest, setQuest] = useState(questState);
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)



  const grabllama = (query) => {
    API.llama(query)
      .then((res) => {
        setQuest({
          animal: res.data[0].animal,
          questions: res.data[0].questions

        })
      })
      .catch((err) => console.log(err))
  };

  const grabBoa = (query) => {
    API.boa(query)
      .then((res) => {
        setQuest({
          animal: res.data[0].animal,
          questions: res.data[0].questions

        })
      })
      .catch((err) => console.log(err))
  };

  const grabGorilla = (query) => {
    API.gorilla(query)
      .then((res) => setQuest({
        animal: res.data[0].animal,
        questions: res.data[0].questions
      }))
      .catch((err) => console.log(err))
  };

  const grabArfox = (query) => {
    API.arfox(query)
      .then((res) => setQuest({
        animal: res.data[0].animal,
        questions: res.data[0].questions
      }))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    if (tiles[3][5] === 'llama') {
      setI(0)
      setHighscore(score)
      localStorage.setItem('score',JSON.stringify(score))  
      return grabllama()
    } else if (tiles[1][5] === 'boa') {
      setI(0)
      setHighscore(score)
      localStorage.setItem('score',JSON.stringify(score))  
      return grabBoa()
    } else if (tiles[0][1] === 'jungled2') {
      setI(0)
      setHighscore(score)
      localStorage.setItem('score',JSON.stringify(score))  
      return grabGorilla()
    } else if (tiles[3][0] === 'arcticpenguin') {
      setI(0)
      setHighscore(score)
      localStorage.setItem('score',JSON.stringify(score))  
      return grabArfox()
    } else {
      setI(0)
      localStorage.setItem('score',JSON.stringify(score))  
      setQuest(questState)
      
      if(localStorage.getItem(highscore)<localStorage.getItem(score))
      {
        setHighscore(score)
      }
      localStorage.setItem('highscore',JSON.stringify(highscore))
    }
  }, [tiles])




  const OnClick =  (e) => {
   if ( i === quest.questions.length) {
      return      
    } else if (e.target.textContent == quest.questions[i].correct) {
      setI(i + 1)
      setScore(score + 1)
    
    } else if (e.target.textContent !== quest.questions[i].correct) {
      setI(i + 1)

    }

  }





  return (

    <body className="CardContainer">
      
        <h3>Current Score :{score}</h3>
       
      <div id="QCard">
        <div class="interior">
          <div className="interiorTitle">
            {/*animal*/}
            <h1>{quest.animal}</h1>

          </div>

          {/* answer form */}
          {i === quest.questions.length ? (
            <div className="answerContainer">{

              <p>Completed</p>
            }
            </div>
          ) : (
            <div className="answerContainer">
              {/* what the question */}
              <p>{quest.questions[i].quest}</p>
              {

                quest.questions[i].answer.map((ans) => {

                  return <button className="AnswerBtn" onClick={OnClick}>{ans}</button>
                })
              }
            </div>
          )
          }


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
