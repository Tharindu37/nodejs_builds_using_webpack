const express = require('express');

const app = express();
const PORT =3002

app.get("/",(req, res)=>{
    res.send("Ok")
})

app.listen(PORT, ()=>{
    console.log('Listing port', PORT)
});