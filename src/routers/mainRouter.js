const express=require("express");
const routers= express.Router();
const controller=require("../controllers/mainController");

routers.get("/", controller.index);
routers.get("/detalle/:id", controller.detalleMenu);



module.exports=routers;
