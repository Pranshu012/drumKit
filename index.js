var keys = document.querySelectorAll(".drum");

keys.forEach(button=>{
    button.addEventListener("click",function(){
        console.log(this);
       
        playAnimation(this);
        playSound(this.innerHTML);
       
       
    })
})

document.addEventListener("keydown", function(event){
    playSound(event.key);
    var drumKey = event.key;
    playAnimation(document.querySelector("."+drumKey));
   
})

function playSound(key){
    switch(key) {
        case 'w' : {
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case 'a' : {
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case 's' : {
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case 'd' : {
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        }
        case 'j' : {
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        }
        case 'k' : {
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        }
        case 'l' : {
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        }
    }
}

function playAnimation(key){
    const originalColor = key.style.color;
    key.style.color = "white";
    setTimeout(()=>{
        key.style.color = originalColor;
    },200);

}