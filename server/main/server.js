const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const PORT  = process.env.PORT || 1337;
app.use(bodyParser.json());

app.get('',(req,res)=>{
    res.send('Bok svima')
})

app.listen(PORT,()=>console.log(`Server is running on port http://localhost:${PORT}`));