const div = document.querySelector("#photo");

div.addEventListener("click", function () {
  if (div.classList.contains("borde") == true) {
    div.classList.remove("borde");
  } else {
    div.classList.add("borde");
  }
});
