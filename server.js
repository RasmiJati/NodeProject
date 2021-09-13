const express = require('express');
const app = express();


app.listen(3000,  function(){
    console.log(`listening at 3000`)
});
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/hello', (req, res) => {
    res.send('Hello World from rj!')
});
