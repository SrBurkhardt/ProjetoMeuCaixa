const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//view engine
app.set('view engine', 'ejs');

//arquivos estaticos
app.use(express.static('public'));

// configurando o body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/", (req,res)=>{
    res.render("index");
});

app.listen(1010, ()=>{
    console.log("Servidor rodando na porta 1010");
});