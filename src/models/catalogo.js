var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CatalogoSchema=Schema({
    nombre:String,
    precio:String,
    cantidad:String,
});
const Catalogo = mongoose.model('catalogo', CatalogoSchema);

module.exports=Catalogo;
