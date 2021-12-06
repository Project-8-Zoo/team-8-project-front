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

  const grabGorilla = (query) =>
    API.gorilla(query)
      .then((res) => setQuest({ animal: res.data[0].animal, }))
      .catch((err) => console.log(err));

  const grabArfox = (query) =>
    API.arfox(query)
      .then((res) => setQuest({ animal: res.data[0].animal, }))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (tiles[3][5] === 'llama') {
      setI(0)
      return grabllama()
    } else if (tiles[1][5] === 'boa') {
      setI(0)
      return grabBoa()
    }else{
      setI(0)
      setQuest(questState)
    }
  }, [tiles])




  const OnClick = (e) => {
    if (i === quest.questions.length) {
      console.log('yeet')
      return 
    } else if (e.target.textContent == quest.questions[i].correct) {
      setI(i + 1)
      setHighscore(highscore + 1)
      console.log(i)
      console.log(highscore)
    } else if (e.target.textContent !== quest.questions[i].correct) {
      setI(i + 1)
      console.log(i)
      console.log(highscore)
    }

  }

  return (

    <body className="CardContainer">
      <div>{highscore}</div>
      <div id="QCard">
        <div class="interior">
          <div className="interiorTitle">
            {/*animal*/}
            <h1>{quest.animal}</h1>

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
              <p>{quest.questions[i].quest}</p>
              {

                quest.questions[i].answer.map((ans) => {

                  return <button className="btn" onClick={OnClick}>{ans}</button>
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
