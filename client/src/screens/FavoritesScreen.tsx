import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { colors } from '../consts/colors';


const FavoritesScreen = () => {
    const classes = useClasses();
    return (
        <Box className={classes.mainContainer}>

        </Box>
    )
}

const useClasses = makeStyles({
    mainContainer: {
        backgroundColor: colors.bgColor,
        height: '100vh',
    }
})

export default FavoritesScreen;