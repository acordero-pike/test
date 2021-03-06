const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
 
let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {

  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}




function sonarPajaros(asd){
	console.log(asd)
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","sounds/smash.mp3");
	document.body.appendChild(sonido);
	document.getElementById(asd).removeEventListener("click",sonarPajaros);
  		

}

function callarPajaros(asd){
	console.log(asd)
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById(asd).addEventListener("click",sonarPajaros);
	}
}


square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      document.getElementById("play").addEventListener("click",sonarPajaros(id.id));
      document.getElementById("play").addEventListener("mouseup",callarPajaros(id.id));	
      hitPosition=null
   
    }
  })
})


function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 600)
 
}

moveMole()


function countDown() {
  
  timeLeft.textContent = currentTime
  currentTime--
  if(currentTime === 0 ) {
     timeLeft.textContent = currentTime
    clearInterval(timerId)
         alert("Juego Finalizado el total de puntos fue de "+ result)
    alertify.confirm("Desea Repetir el juego ?.",
    function() {
      
   location.reload()
    },
    function() {
       
      location.replace("https://ockelmann.github.io/ProyectoJS/index.html")
  
    }
  );

 
  }
  
}

let timerId = setInterval(countDown, 1000)


