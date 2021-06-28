const { Router } = require('express');
const express = require('express');
//genero una aplicacion express

const app = express()
// routes
const { RouterIndex } = require('./ROUTES/index');

app.use("/", RouterIndex)
app.use("/prueba", RouterIndex)

/*
        "/"+"/"="//" => "/"
        "/"+"saludo" = "//Saludo" => "/saludo"
        "/"+ "'/saludo/:nombre'" = //saludo/:nombre => "/saludo/:nombre"
        "/user" + "/saludo" = "/user/saludo"
        "user/data" + "/saludo" = "/user/data/saludo"
*/
app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})