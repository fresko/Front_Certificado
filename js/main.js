var servidor = "http://oa04cc01.idu.gov.co:7004/";
var tipoDato="1";
var url = servidor + "WSRestCertificado/api/catastro/obtenerCertificado";
var respuesta;
var data;

$( "#buscar" ).click(function() {
	var dato = $("#dato").val();

	if(tipoDato==undefined)tipoDato="1";
	data = '{'+
	'"opcion":"'+tipoDato+'",'+//Ej 2
	'"dato":"'+dato+'"'+//Ej: AAA0179HKBR
	'}';
    console.log(data);
	$.ajax({
    	headers: {
           //  "Accept": "text/xml",
    	    'Content-Type': 'application/json'
    	},
    	'type': 'POST',
    	'url': url,
    	'data': data,
    	'dataType': 'json',
    	'error':error,
    	'success': success
  	});
});

$("#tipo-dato").change(function() {
	$("#dato").val("");
    tipoDato = $("#tipo-dato").val();
});

function success(respuesta){
  var pdf = respuesta.result.pdfCertificado;
  window.open("data:application/pdf;base64,"+pdf,"_blank");
}

function error(error){
  	console.log(error.statusText);	
}