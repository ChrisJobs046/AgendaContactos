


//Comienza Prueba de una Funcion fetch

function obtenerDatos(){

     fetch('http://www.raydelto.org/agenda.php')
                     

    .then((resultado) => {

        return resultado.json();

        r = JSON.parse(resultado);
        
    }).then(function(r){

      

      $.getJSON('http://www.raydelto.org/agenda.php',processContacts);
       function processContacts(data) {
       // create variable with empty string
       var contacto='';
      
       //loop through each object in the JSON data
       $.each(data,function(contact, contactInfo) {

        contacto+='<p>Contacto: ' + contactInfo.nombre;

        contacto+=' ' + contactInfo.apellido + '<br>';
       
        contacto+='Telefono: ' + contactInfo.telefono + '</p>';

       if(contactInfo.nombre == "" & contactInfo.apellido == "" & contactInfo.telefono == ""){
               alert("Hay contactos con campos Vacios "); 
        }
       
    }); // end of each()
      
       // add finished HTML to page
       $('#listaCOn').html(contacto);
       }

       

 
       
    }).catch(() => {
        document.getElementById('divprincipal').innerHTML= "<h1> Error Al Intentar Cargar Los Datos </h1>";    
    });
}

function guardar(){
    var nombre = document.getElementById('name');
    var apellido = document.getElementById('lastName');
    var telefono = document.getElementById('phone');
    var detalle = {
        method: "POST",
        body: JSON.stringify({
            "nombre" : nombre.value,
            "apellido": apellido.value,
            "telefono": telefono.value
        })
    }

    fetch("http://www.raydelto.org/agenda.php", detalle)
    .then(function (respuesta){
        return respuesta.json();
    })
    .then(function(respuesta){
        
        if(respuesta.exito === true){
             alert("EXITO");
        }else{
            estado.innerHTML = "Hubo un problema al enviar datos";
        }
    });

}