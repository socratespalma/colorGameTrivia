let numCuadros = 6;
let colores = generarColoresAleatorios(numCuadros);
let cuadros = document.querySelectorAll(".cuadro");
let colorSeleccionado = seleccionarColor();
let colorMostrado = document.getElementById("colorMostrado");
let mensaje = document.querySelector("#mensaje");
let h1 = document.querySelector("h1");
let btnReset = document.getElementById("reset");
let btnFacil = document.getElementById("btnFacil");
let btnDificil = document.getElementById("btnDificil");

colorMostrado.textContent = colorSeleccionado;

function clickCuadro() {
  let colorClickeado = this.style.backgroundColor;
  if (colorClickeado === colorSeleccionado) {
    mensaje.textContent = "Correcto!";
    btnReset.textContent = "Volver a jugar?";
    cambiarColores(colorClickeado);
    h1.style.backgroundColor = colorClickeado;
  } else {
    this.style.backgroundColor = "#232323";
    mensaje.textContent = "Intente de nuevo!";
  }
}

function cambiarColores(color) {
  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = color;
  }
}

function seleccionarColor() {
  let aleatorio = Math.floor(Math.random() * colores.length);
  return colores[aleatorio];
}

function generarColoresAleatorios(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(colorAleatorio());
  }
  return arr;
}

function colorAleatorio() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetColors() {
  colores = generarColoresAleatorios(numCuadros);
  colorSeleccionado = seleccionarColor();
  colorMostrado.textContent = colorSeleccionado;
  this.textContent = "Colores Nuevos";
  mensaje.textContent = "";
  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = colores[i];
  }
  h1.style.backgroundColor = "steelblue";
}

function toggleFacil() {
  btnDificil.classList.remove("seleccionado");
  btnFacil.classList.add("seleccionado");
  numCuadros = 3;
  colores = generarColoresAleatorios(numCuadros);
  colorSeleccionado = seleccionarColor();
  colorMostrado.textContent = colorSeleccionado;
  for (let i = 0; i < cuadros.length; i++) {
    if (colores[i]) {
      cuadros[i].style.backgroundColor = colores[i];
    } else {
      cuadros[i].style.display = "none";
    }
  }
}

function toggleDificil() {
  btnFacil.classList.remove("seleccionado");
  btnDificil.classList.add("seleccionado");
  numCuadros = 6;
  colores = generarColoresAleatorios(numCuadros);
  colorSeleccionado = seleccionarColor();
  colorMostrado.textContent = colorSeleccionado;
  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = colores[i];
    cuadros[i].style.display = "block";
  }
}

for (let i = 0; i < cuadros.length; i++) {
  cuadros[i].style.backgroundColor = colores[i];
  cuadros[i].addEventListener("click", clickCuadro);
}

btnReset.addEventListener("click", resetColors);

btnFacil.addEventListener("click", toggleFacil);

btnDificil.addEventListener("click", toggleDificil);
