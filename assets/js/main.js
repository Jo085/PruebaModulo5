import { Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';

// Patrón de módulo con función IIFE
const CargarConsulta = (() => {
  try {
      const Consulta = async () => {
          const url = 'animales.json';
          const response = await fetch(url);
          const datosAnimales = await response.json();
          console.log(datosAnimales); // muestra en la consola los datos traidos
          return datosAnimales;          
      }
      return {
          traerDatos: Consulta()
      }
     
  } catch (error) {
     console.log(error)
  }
})();

const datos = await CargarConsulta.traerDatos; // Guarda los datos de la consulta en una variable global

// variables que rescatan los valores del formulario
let selectAnimal= document.getElementById("animal");
let edad= document.getElementById("edad");
let comentario = document.getElementById("comentarios");
    
// variables para manipular el DOM 
let imagenForm = document.getElementById("preview"); // imagen previa formulario
let botonRegistrar = document.getElementById("btnRegistrar"); // botón formulario
let Agregar = document.getElementById("Animales"); // Tabla de investigación


// Se declaran las variables que serán ocupadas para instanciar las clases 
let leon;
let lobo;
let oso;
let serpiente;
let aguila;

// función para registrar animal e instanciar según datos del formulario y los datos de la consulta
botonRegistrar.addEventListener("click", () => {    

    switch (selectAnimal.value) { 

      case "Leon":
        leon = new Leon(
          selectAnimal.value, //nombre
          edad.value,         //edad
          datos.animales[0].imagen, //img
          comentario.value, // comentarios
          datos.animales[0].sonido //sonido
        );
        mostrarEnTabla(leon);
        console.log(leon.nombre, leon.edad, leon.comentarios);
        break;

      case "Lobo":
        lobo = new Lobo(
          selectAnimal.value,
          edad.value,
          datos.animales[1].imagen,
          comentario.value,
          datos.animales[1].sonido
        );
        mostrarEnTabla(lobo);
        break;

      case "Oso":
        oso = new Oso(
          selectAnimal.value,
          edad.value,
          datos.animales[2].imagen,
          comentario.value,
          datos.animales[2].sonido
        );
        mostrarEnTabla(oso);
        break;

      case "Serpiente":
        serpiente = new Serpiente(
          selectAnimal.value,
          edad.value,
          datos.animales[3].imagen,
          comentario.value,
          datos.animales[3].sonido
        );
        mostrarEnTabla(serpiente);        
        break;

      case "Aguila":
        aguila = new Aguila(
          selectAnimal.value,
          edad.value,
          datos.animales[4].imagen,
          comentario.value,
          datos.animales[4].sonido
        );
        mostrarEnTabla(aguila);
        break;
    }

  limpiarFormulario();  
});


selectAnimal.addEventListener("change", () => { // Función para mostrar foto previa del animal 
    
    imagenForm.style.backgroundImage = "none"; // Oculta la imagen por defecto (león) en el formulario
    imagenForm.className = "d-flex justify-content-center rounded img-fluid";

  // Si el valor de la selección coincide con el nombre del animal, se mostrará en el formulario la imagen del animal seleccionado 
    switch (selectAnimal.value) { 
      case "Leon":        
        imagenForm.innerHTML = `<img src="assets/imgs/Leon.png" class="rounded img-fluid"  width="200" alt="león">`;
        break;

      case "Lobo":       
        imagenForm.innerHTML = `<img src="assets/imgs/Lobo.jpg" class="rounded img-fluid"  width="200" alt="lobo">`;
        break;

      case "Oso":
        imagenForm.innerHTML = `<img src="assets/imgs/Oso.jpg" class="rounded img-fluid "  width="200" alt="oso">`;
        break;

      case "Serpiente":        
        imagenForm.innerHTML = `<img src="assets/imgs/Serpiente.jpg" class="rounded img-fluid" width="200"  alt="serpiente">`;
        break;

      case "Aguila":
        imagenForm.innerHTML = `<img src="assets/imgs/Aguila.png" class="rounded img-fluid" width="200"  alt="águila">`;
        break;
    }
  });


const mostrarEnTabla = (a) => { // función para mostrar el animal agregado en la tabla de investigación
  
  let animalAgregado = `<div class="p-3">                          
                            <img src="assets/imgs/${a.img}" class= "rounded-top" width = "160"  height="180" data-toggle="modal" data-target="#exampleModal">
                            <div>
                              <button class="btn col-12  btn-secondary rounded-0 rounded-bottom">
                                <img  src="assets/imgs/audio.svg"  width="35"> 
                              </button>
                            </div>                          
                      </div> `; 

  Agregar.insertAdjacentHTML("beforeend", animalAgregado);   
};

const limpiarFormulario = () => { //Devuelve el formulario a un estado inicial
selectAnimal.value = "";
edad.value = "";
comentario.value = "";
imagenForm.innerHTML = `<img src="assets/imgs/lion.svg" class="rounded img-fluid" width="200">`;  
};

