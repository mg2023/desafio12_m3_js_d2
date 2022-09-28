const valor1 = document.querySelector("#s1")
const valor2 = document.querySelector("#s2")
const valor3 = document.querySelector("#s3")
const respuesta = document.querySelector('h2')


let boton = document.querySelector("#boton")

boton.addEventListener("click", function () {

  console.log("Evento recibido");
  console.log(valor1.value);
  console.log(valor2.value);
  console.log(valor3.value);

  let password = sumaStrings(valor1.value,valor2.value,valor3.value)

  console.log(password)


  if(password === "911")
  {
    console.log(`Password 1 correcto`)
    respuesta.innerHTML = `Password 1 correcto`
  }else if(password === "714"){
    console.log("Password 2 correcto")
    respuesta.innerHTML = 'Password 2 correcto'
  }else{
    console.log("Password incorrecto")
    respuesta.innerHTML = 'Password incorrecto'
  }
});

function sumaStrings (a,b,c){
  return ( a + b + c)
}