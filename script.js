
const ghostImg = document.getElementById("ghost");
const btnNormal     = document.getElementById("Normal");
const btnFrightened = document.getElementById("Frightened");
const btnEyes       = document.getElementById("Eyes");
const btnFlashing   = document.getElementById("Flashing");

const STATES = {
  normal:     { src:"./ghost_normal.jpg",     alt:"Fantasma normal",                 theme:"theme-normal" },
  frightened: { src:"./ghost_frightened.jpg", alt:"Fantasma asustado (azul)",       theme:"theme-frightened" },
  eyes:       { src:"./ghost_eyes.png",       alt:"Solo ojos (derrotado)",          theme:"theme-eyes" },
  flashing:   { src:"./ghost_flashing.jpg",   alt:"Fantasma blanco (fase final asustado)", theme:"theme-flashing" },
};

(function preload(){
  [
    STATES.normal.src, STATES.frightened.src, STATES.eyes.src, STATES.flashing.src,
    "./PACMANWPP.jpg", "./PACMANWPP(2).jpg", "./PACMANWPP(3).jpg", "./PACMANWPP(4).jpg"
  ].forEach(src => { const i = new Image(); i.src = src; });
})();

function setState({src, alt, theme}){
  ghostImg.style.opacity = "0";
  ghostImg.style.transform = "scale(0.98)";
  setTimeout(()=>{
    ghostImg.src = src;
    ghostImg.alt = alt;
    ghostImg.style.opacity = "1";
    ghostImg.style.transform = "scale(1)";
  }, 140);
  document.body.className = theme; 
}

btnNormal.addEventListener("click",     ()=> setState(STATES.normal));
btnFrightened.addEventListener("click", ()=> setState(STATES.frightened));
btnEyes.addEventListener("click",       ()=> setState(STATES.eyes));
btnFlashing.addEventListener("click",   ()=> setState(STATES.flashing));

setState(STATES.normal);
