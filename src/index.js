import './styles/index.scss'
import Player from './scripts/player'
import Timer from './scripts/teleportation_timer'

document.addEventListener("DOMContentLoaded", () => {
   

    let board = document.getElementById("board");
    
    let new_timer = new Timer(increase_teleportation_meter, 1000); 

    board.addEventListener("click", getClickPosition, false);
    let theThing = document.getElementById("jae"); 
    let meter = document.getElementById("teleportation_meter"); 
    let score = document.getElementById("scoreboard"); 

    let score_num = 0; 

    let teleportation_meter = false; 
    
    countUp(); 
    function countUp() {
        setInterval(increaseScore, 10)
    }

    function increaseScore(){
        
        score_num += 1; 
        var textnode = document.createTextNode(score_num); 

        if (score.childNodes.length !== 0) {
            score.removeChild(score.childNodes[0]);
        }
        debugger
        score.appendChild(textnode); 
    }


    function pause() {
        new_timer.start(); 
        setTimeout(allow_teleport,3000)
    }

    pause(); 

   function increase_teleportation_meter(){
        let current_width = meter.style.width; 
        let num = parseInt(current_width.split("px")[0]);  
        let new_px = num + 30;
        
        if (new_px <= 90){
            meter.style.width = new_px + "px"; 
        }    
        
        let new_width = meter.style.width; 
        let new_num = parseInt(new_width.split("px")[0])
        if (new_num >= 90){
            new_timer.stop(); 
        }
      
        
   }
    function allow_teleport () {
        teleportation_meter = true; 
    }

    function getClickPosition(e) {
        e.preventDefault(); 
        if (teleportation_meter) {
            var parentPosition = getPosition(e.currentTarget);
            var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
            var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);

         
            teleportation_meter = false; 
            theThing.style.left = xPosition + "px";
            theThing.style.top = yPosition + "px";
            meter.style.width = "0px";
            pause(); 
        }
        else{

        }

    }
    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }
})