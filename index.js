const crew = document.getElementById("crew")
const btn = document.getElementById("btn")
const audio = new Audio('../music/music.mp3')


function bounceOut() {
   crew.classList.add('bounce-out-top')
   audio.play() 
    
}

btn.addEventListener('click', bounceOut)

     

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
