const path=require("path");
const fs=require("fs");

const databasePath=path.join(__dirname, "../database/database.json");
const db= JSON.parse(fs.readFileSync(databasePath, "utf-8"));

const controller={
    index:(req,res)=>{
        res.render("index",{
            db
        })
    },
    detalleMenu:(req,res)=>{
        let producto=db.find(producto=>{
            return producto.id==req.params.id
        }

            )
        res.render("detalleMenu",{producto})
    }
}


module.exports=controller;