import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { mainTheme } from './consts/mainTheme';
import LoginRegisterContaienr from './containers/LoginRegisterContaienr';
import MainRouter from './router/MainRouter';



const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <MainRouter />
        </ThemeProvider>
    )
}

export default App;