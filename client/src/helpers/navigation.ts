import { LocationState, History } from 'history';
import { Routes } from '../router/Routes';


export const replaceLoginScreen = (history: History<LocationState>) => {
    history.replace(Routes.Favorites);
}