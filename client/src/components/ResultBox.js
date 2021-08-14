import React,{useState} from 'react';

import AppAppBarResult from '../views/AppAppBarResult';
import withRoot from '../withRoot';
import { navigate } from '@reach/router'
import Button from '@material-ui/core/Button';
import '../App.css';
  

const ResultBox = (props) => {
  const {playAgain, score} = props;
  
  return (
    
    <div class="login-div">
      {/* {navigate('/quizResult')} */}
       <React.Fragment >
      <AppAppBarResult/>
    </React.Fragment>
    <div>
          <div style={{fontSize:'24px', color:"black"}}> Your score is {score} / 5 correct answer ! ! ! </div>
          <Button className="playBtn" onClick={playAgain} href="/questions" color="primary" variant="contained" style={{marginTop:'45px'}}> Retake </Button>
        </div>    
    </div>
  )
}

export default withRoot(ResultBox);

