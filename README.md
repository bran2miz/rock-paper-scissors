# Rock 🪨 Paper 📝 Scissors ✂️

## Author: Brandon Mizutani

## Version: 1.0.0

### Overview

Simple rock paper scissors game that uses rtk (redux tool kit). A store is created with two slices that handles the game and campaign.

### Notes:

example:

Rock Paper Scissors -->

select your selection and send it
        --->

evaluate the outputs from both player and computer and determine winner. 
        --->

3 "shoots" constitute a game - best 2/3

ties don't count against shoots

CAMPAIGN -- total games played

total player wins

Campaign state:
state:
totalGames:
totalPlayerwWins:

updateGames:
when game hits "done" state call this action pass player wins

**game state**:
playerShoot:
computerShoot:
playerWins:
shoots:

**actions**:
shoot
    - updating the playerShoot state
    - update the computerShoot state
    - did the player win
    - updates shoots
    - consider a tie

