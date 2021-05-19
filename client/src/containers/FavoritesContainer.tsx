import React from 'react';
import FavoritesScreen from '../screens/FavoritesScreen';
import axios from 'axios';

const FavoritesContainer = () => {
    React.useEffect(() => {
        axios.get("https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json", {
            "headers": {
                "x-rapidapi-key": "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
                "x-rapidapi-host": "twelve-data1.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    React.useEffect(() => {
        axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?symbol=AACG&interval=5m&range=1d&region=US", {
            "headers": {
                "x-rapidapi-key": "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])
    return (
        <FavoritesScreen />
    )
}

export default FavoritesContainer;