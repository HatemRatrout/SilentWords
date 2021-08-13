import React,{useState} from 'react';
// import "../style.css";
  

const ResultBox = (props) => {
  const {playAgain , score}=props;




  
  return (
    <div>
        <div className="score-board">
          <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
          <button className="playBtn" onClick={playAgain} > Play Again </button>
        </div>    
    </div>
  )
}

export default ResultBox;

