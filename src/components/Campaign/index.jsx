import React from 'react';
import {Card, CardContent,Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import campaignSlice from '../../store/campaignSlice';
import { useEffect } from 'react';


const Campaign = () => {
    const campaign = useSelector(state => state.campaign);

    const dispatch = useDispatch();

    const game = useSelector(state => state.game);

    useEffect(()=> {
        if (game.done) dispatch(campaignSlice.actions.updateCampaign(game.playerWins));
    }, [dispatch, game])


  return (
    <div style={{marginTop: "16px"}}>
    <Card style={{width: "400px", margin:"auto"}}>
    <CardContent>
        <Typography variant="h5">Total Games Played:{campaign.totalGamesPlayed}</Typography><Typography variant="h5">Total Player Wins:{campaign.totalPlayerWins}</Typography>
        </CardContent>
    </Card>
</div>
  )
}

export default Campaign