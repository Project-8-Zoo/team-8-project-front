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
        quest: ``,
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
      return grabllama()
    } else if (tiles[1][5] === 'boa') {
      setI(0)
      return grabBoa()
    } else if (tiles[0][1] === 'jungled2') {
      setI(0)
      return grabGorilla()
    } else if (tiles[3][0] === 'arcticpenguin') {
      setI(0)
      return grabArfox()
    } else {
      setI(0)
      setQuest(questState)
    }
  }, [tiles])




  const OnClick = async (e) => {
    if (i === quest.questions.length) {
      return localStorage.setItem('highscore',JSON.stringify(highscore))      
    } else if (e.target.textContent == quest.questions[i].correct) {
      setI(i + 1)
      setScore(score + 1)

       localStorage.setItem('score',JSON.stringify(score))  
    
    } else if (e.target.textContent !== quest.questions[i].correct) {
      setI(i + 1)

    }else{
      setHighscore(score)
      localStorage.setItem('highscore',JSON.stringify(highscore))

    }

  }

  return (

    <body className="CardContainer">
      
       
      <h3 className="Score">Score: {score}</h3>
      <div id="QCard">
        <div class="interior">
          <div className="interiorTitle">
            {/*animal*/}
            <h1 className="AnimalName">{quest.animal}</h1>

          </div>

          {/* answer form */}
          {i === quest.questions.length ? (
            <div className="answerContainer">{

              <p>Success</p>
            }
            </div>
          ) : (
            <div className="answerContainer">
              {/* what the question */}
              <p className="AnswerText">{quest.questions[i].quest}</p>
              {

                quest.questions[i].answer.map((ans) => {

                  return <button className="AnswerBtn" onClick={OnClick}>{ans}</button>
                })
              }
            </div>
          )
          }


        </div>

        
        
           
        </div>
    </body>
  );
}

export default Questions;
