import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "rock-paper-scissors",
    initialState:{
        playerThrow: undefined,
        computerThrow: undefined,
        shoots: 0,
        playerWins: 0,
        done: false
    },
    reducers: {
        shoot: (state, action) => {
            const player = action.payload.player;
            const computer = action.payload.computer || generateThrow();
            state.playerThrow = player;
            state.computerThrow = computer;


            if (player !== computer) {
                // update shots and playerWins (maybe)
                if (state.shoots === 2 ) state.done = true;
                state.shoots+=1;
                // determine winner / did player win
                const playerWon = evaluatePlayerWin(player, computer);
                // if this is truthy, update the win count by 1.
                if (playerWon) {
                    state.playerWins+=1;
                }
            }
        },
        reset: (state) => {
            state.playerThrow= undefined,
            state.computerThrow= undefined,
            state.shoots= 0,
            state.playerWins= 0,
            state.done= false
            
        }
    }
});

const generateThrow = () => {
    const options = ["rock", "paper", "scissors"];

    const index = Math.floor(Math.random() * 3);

    return options[index];
};

export const evaluatePlayerWin = (player,computer) => {
    const winConditions = {
        rock: "paper",
        scissors: "rock",
        paper: "scissors"
    }
    // ie if the computer threw scissors, if player throws rock the return will return truthy, if it was paper it will return as falsey (did not win)
    return winConditions[computer] === player
};

export default gameSlice;