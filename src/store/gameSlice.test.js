import gameSlice from "./gameSlice";
import { evaluatePlayerWin } from "./gameSlice";

describe("evaluate player win", () => {
    test("it should return true if the player wins", () => {
        expect(evaluatePlayerWin("rock", "scissors")).toBe(true);
    });
    test("it should return false if the player loses", () => {
        expect(evaluatePlayerWin("rock", "paper")).toBe(false);
    });
});

describe("game reducers work", ()=> {
    test("shoot works properly", () => {
        // arrange (set up variables)
        const initialState = {
            playerThrow: undefined,
            computerThrow: undefined,
            shoots: 0,
            playerWins: 0,
            done: false
        };

        const payload = {player: "rock", computer: "scissors"};
        // act (do what behavior you want to do )
        const newState = gameSlice.reducer(initialState, gameSlice.actions.shoot(payload));
        // assert (what I expect)
        // expect to see some state change
        expect(newState.playerThrow).toBe("rock");
        expect(newState.computerThrow).toBe("scissors");
        expect(newState.shoots).toBe(1);
        expect(newState.playerWins).toBe(1);
    })
})