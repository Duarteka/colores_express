var express = require("express");
var {conection} = require ("./database");
var bodyParser = require("body-parser");

var servidor = express();

servidor.use(bodyParser.json());
servidor.use(express.static("public"));

servidor.get("/colores", (req,res)=>{
    var consulta = "SELECT * FROM colores";

    conection.query(consulta, (error,resultado) => { 
        if(!error){
        res.json(resultado);
        } 
    });
    
});

servidor.post("/colores", (req,res) => {
    //console.log(req.body);
    var {rojo,verde,azul} = req.body;
    var consulta = `INSERT INTO colores (rojo,verde,azul)VALUES (${rojo},${verde},${azul})`
     
    conection.query(consulta,(error)=>{
        var resultado = {};
        resultado.resultado = error ? "ko" : "ok";
        res.json(resultado);
    });
    

});
var puerto = process.env.PORT;
servidor.listen(puerto ? puerto : 3000, ()=> console.log("escuchando en el puerto 3000"));
