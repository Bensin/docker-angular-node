const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/getData',(req, res) =>{
    res.json({
        "statusCode":200,
       "dataRes":"data from node api server"
    });
});

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`server listening port ${PORT}`);
})

