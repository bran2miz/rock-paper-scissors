import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "rock-paper-scissors",
    initialState:{
        playerThrow: undefined,
        computerThrow: undefined,
        shoots: 0,
        playerWins: 0
    },
    reducers: {
        shoot: (state, action) => {
            const player = action.payload;
            const computer = generateThrow();
            state.playerThrow = player;
            state.computerThrow = computer;


            if (player !== computer) {
                // update shots and playerWins (maybe)
                state.shoots+=1;
                // determine winner / did player win
                const playerWon = evaluatePlayerWin(player, computer);
                // if this is truthy, update the win count by 1.
                if (playerWon) {
                    state.playerWins+=1;
                }
            }
        }
    }
});

const generateThrow = () => {
    const options = ["rock", "paper", "scissors"];

    const index = Math.floor(Math.random() * 3);

    return options[index];
};

const evaluatePlayerWin = (player,computer) => {
    const winConditions = {
        rock: "paper",
        scissors: "rock",
        paper: "scissors"
    }
    // ie if the computer threw scissors, if player throws rock the return will return truthy, if it was paper it will return as falsey (did not win)
    return winConditions[computer] === player
};

export default gameSlice;