var mysql = require("mysql");

var configuracion = {
    host : "localhost",
    port : 8889,
    user : "root",
    password : "root",
    database : "colores"

}
var conection = mysql.createConnection(configuracion); 
conection.connect(function(error){
    if(error){
        console.log("KO");
    }
});
/*var consulta = "INSERT INTO colores (rojo, verde, azul) VALUES (255,0,80)";
conection.query(consulta,(error,resultado) => {

    if(error){
        console.log(error);

    }else{
        console.log(resultado);
    }
}); */
module.exports = { // es lo que se conecta con el require
    conection : conection
}
