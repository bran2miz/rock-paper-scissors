// import React from 'react';
import { Button, ButtonGroup,Card, CardContent, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import gameSlice from '../../store/gameSlice';

const Game = () => {

    const game = useSelector(state => state.game)

    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(gameSlice.actions.shoot({player:e.target.name}))
    }

    const handleReset = () => {
        //dispatch some reset action
        dispatch(gameSlice.actions.reset())
    }

  return (
    <div style={{marginTop: "16px"}}>
        <Card style={{width: "400px", margin:"auto"}}>
        <CardContent>
            {game.done ? (<Button onClick={handleReset} variant="contained" fullWidth>Play Again ?</Button>):(
            <><ButtonGroup fullWidth variant="contained"
                          disabled={game.done}
                      >
                          <Button variant="contained" onClick={handleClick} name="rock">Rock</Button>
                          <Button variant="contained" onClick={handleClick} name="paper">Paper</Button>
                          <Button variant="contained" onClick={handleClick} name="scissors">Scissors</Button>
                      </ButtonGroup><Typography variant="h5">Player Throws:{game.playerThrow}</Typography><Typography variant="h5">Computer Throws:{game.computerThrow}</Typography><Typography variant="h5">Rounds:{game.shoots}</Typography><Typography variant="h5">Player Wins:{game.playerWins}</Typography></>)}
            </CardContent>
        </Card>
    </div>
  )
};

export default Game