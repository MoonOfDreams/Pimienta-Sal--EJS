const express =require("express");
const app= express();
const puerto=3000;
const path=require("path")
/* configuraciones */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
/* rutas */
const mainRouters=require("./routers/mainRouter")
app.use("/", mainRouters);

app.listen(puerto, ()=> console.log("server listo en " + puerto));
