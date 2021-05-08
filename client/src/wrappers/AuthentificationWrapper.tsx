import React from 'react';
import { makeStyles } from '@material-ui/core';
import MainRouter from '../router/MainRouter';

const AuthentificationWrapper = () => {
    const classes = useClasses();

    return (
        <>
            <main className={classes.main}>
                <MainRouter authentificationToken={"auth token will go here"} />
            </main>
        </>
    )
}

const useClasses = makeStyles({
    main: {
        boxSizing: 'border-box',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 0,
    },
})

export default AuthentificationWrapper;