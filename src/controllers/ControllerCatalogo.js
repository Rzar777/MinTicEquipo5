const { json } = require("body-parser");
const { default: mongoose } = require ("mongoose");
const { find } = require("../models/catalogo");
const Catalogo = require("../models/catalogo");


//Create
function saveProducto(req,res){
    var myCatalogo = new Catalogo(req.body);
    myCatalogo.save((err,result) => {
        res.status(200).send({message: result});
    });
}
//Read By id
function buscarProducto(req,res){
    var idProducto = req.params.id;
    Catalogo.findById(idProducto).exec((err,result)=>{
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la consulta'});
        }else{
            if (!result){
                res.status(404).send({message:'El registro no se encuentra'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}
//Read All
function listarTodo (req,res){
    var idProducto = req.params.idb;
    if(!idProducto){
        var result= Catalogo.find({}).sort('nombre');
    }else{
        var result=Catalogo.find({catalogo:idcatalogo}).sort('nombre');
    }
    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la consulta'});
        }else{
            if (!result){
                res.status(404).send({message:'El registro no se encuentra'});
            }else{
                res.status(200).send({result});
            }
        }
    })
}

//Delete

function borrarProducto(req,res){
    var idProducto=req.params.id;
    Catalogo.findByIdAndRemove(idProducto).exec((err,result)=>{
        if (err){
            res.status(500),send({message:'Error al ejecutarla consulta'})               
        }else{
            if (!result){
                res.status(404).send({message:'El registro no se encuentra'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function updateProducto(req,res){
    var id=req.params.id;
    Catalogo.findOneAndUpdate({_id: id}, req.body, {new: true,},
        function(err, Catalogo){
            if(err){
                res.send(err);
            }
        
        res.json(Catalogo);
    })
}

module.exports={
    
    saveProducto,
    buscarProducto,
    listarTodo,
    borrarProducto,
    updateProducto,
}