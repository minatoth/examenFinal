//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
var models = require('../models/model.js');

exports.registroPost = function (req, res){
	var post = models.Posts.build({ nombres: "nombre",
									post: "post"
									});

	res.render('registroPost', {titulo:'Registro de Post', post: post});
}
exports.respuestaPost = function (req, res){ 

res.render('respuestaPost', {mensaje:'post recibido'});

}
exports.guardarPost = function(req, res){ 

console.log("ingresa a guardar"); 

var contacto = models.Post.build (req.body.post);

    contacto.save ({fields:["nombre",

      "post"
      ]

     }).then(function(){

     console.log("ingresa a redirecr");

     res.render('respuestaPost', {mensaje:'Se registro con exito'});

     });  

}
