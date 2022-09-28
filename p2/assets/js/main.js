const cantidadSticker1 = document.querySelector("#sticker1")
const cantidadSticker2 = document.querySelector("#sticker2")
const cantidadSticker3 = document.querySelector("#sticker3")
const respuesta = document.querySelector('h2')


let boton = document.querySelector("#boton")

boton.addEventListener("click", function () {

  console.log("Evento recibido");
  console.log(cantidadSticker1.value);
  console.log(cantidadSticker2.value);
  console.log(cantidadSticker3.value);

  let totalStickers = suma(cantidadSticker1.value,cantidadSticker2.value,cantidadSticker3.value)

  console.log(totalStickers)


  if(totalStickers <= 10)
  {
    console.log(`Llevas ${totalStickers} stickers`)
    respuesta.innerHTML = `Llevas ${totalStickers} stickers`
  }else{
    console.log("Llevas demasiados stickers")
    respuesta.innerHTML = 'Llevas demasiados stickers'
  }
});


function suma (a,b,c){
  return ( Number(a) + Number(b) + Number(c))
}
