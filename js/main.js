
function alerta() {
	alert("si se pudo");
}

var getInformacion = [];

$.getJSON("js/datos.json", function( json ) {
	$.each( json, function( key, val ) {
		getInformacion.push(
			{
				'key':key,
				'val': val,
			}
			)}
	);
});


function crearOfertas2(clave, valor) {
	let valores = getInformacion[clave].val
	let contenido = '<p class=\"lead text-center\"><strong>' + valores.nombre + '</strong></p><dl class=\"dl-horizontal lead\"><dt>Costo:</dt><dd>'
	contenido += valores.costo +' en seís meses sin intereses</dd>'
	contenido += '<dt>Duración: </dt><dd>' + valores.duracion
	contenido += '</dd><dt>Oferta Especial:</dt><dd>' + valores.oferta + '</dd></dl>';
	
    $('#ofertasViajes').html(contenido);
}



//cambiamos key por item, esperando que podamos transferir un índice ("item") para seleccionar el contenido

function contenidoDatos(item, val){

	let contenido = '<ul><li><p>' + getInformacion[item].val.datos;
	contenido += '</p></li></ul>';
    
    $('#writeDatos').html(contenido);

};



function crearOfertas(clave, valor) {
	let valores = getInformacion[clave].val
	let contenido = '<div class=\"row\"><div class=\"col-xs-10 col-xs-offset-1\">';
	contenido += '<p class=\"lead text-center\"><strong>' + valores.nombre + '</strong></p>';
	contenido += '<dl class=\"dl-horizontal lead\"><dt>Costo:</dt><dd>' + valores.costo + ' en seis meses sin intereses.</dd>';
	contenido += '<dt>Duración: </dt><dd>' + valores.duracion + ' en los mejores hoteles</dd>';
	contenido += '<dt>Oferta Especial:</dt><dd>' + valores.oferta + '</dd></dl></div></div>';
	contenido += '<div class=\"row\"><div id=\"flexycontenedor\">';
	contenido += '<div class=\"itemflex item-1\"><img src=\"' + valores.imagen1 + '\"></div>';
	contenido += '<div class=\"itemflex item-1\"><img src=\"' + valores.imagen2 + '\"></div>';
	contenido += '<div class=\"itemflex item-1\"><img src=\"' + valores.imagen3 + '\"></div>';
	contenido += '</div></div>';
	
    $('#mainOfertas').html(contenido);
}





// // $.getJSON('js/lista.json',function(datos) {
//     $.each(destinos, function(clave, valor){
//         creacontenido(clave, valor);
//     });
   
// // });



// function mediaSize() { 
//   if (window.matchMedia('(min-width: 992px)').matches) {
//     $( ".panel-default-ofertas" ).click(function() {
//       $("#cuadro-destino>iframe").slideToggle("slow");
//     });
    
//   } else {
  
//   }
// };


// let scroll = {
//     'CulturalHistorico':{
//         "id":"Ofertas-Cul",
//         "href":"Ofertas-Cultural"
//     },
//     'NaturalExotico':{
//         "id":"Ofertas-Nat",
//         "href":"Ofertas-Naturall"
//     },
//     'Metropolitano':{
//         "id":"Ofertas-metro",
//         "href":"Ofertas-metropolitano"
//     },
//     'solPlaya':{
//         "id":"Ofertas-so",
//         "href":"Ofertas-sol"
//     }
// }

// $('#Ofertas-Nat').on("click", function(){
//     var posicion = $(" #Ofertas-sol").offset().top;
//     $("html, body").animate({
//         scrollTop: posicion
//     }, 1000); 
// });





