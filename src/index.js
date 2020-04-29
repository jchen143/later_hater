import './styles/index.scss'
import Player from './scripts/player'

document.addEventListener("DOMContentLoaded", () => {
    // var rect = element.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    let board = document.getElementById("board");
    // var bodyRect = board.getBoundingClientRect(); 

    // let test_p = document.createElement("p"); 
    // board.appendChild(test_p); 
    // let pRect = test_p.getBoundingClientRect();

    // let new_div = document.createElement("div"); 
    // var text = document.createTextNode(`${bodyRect.top}`);
    // new_div.appendChild(text); 
    // board.appendChild(new_div); 

    // let the_div = document.createElement("div");
    // var text2 = document.createTextNode(`${pRect.top}`);
    // the_div.appendChild(text2);
    // board.appendChild(the_div); 
   
    // var d = document.getElementById('board_piece');
    // d.style.position = "relative";
    // d.style.left = pRect.left + 'px';
    // d.style.top = pRect.right + 'px';
    // d.style.width = "10px"
    // d.style.height = "10px"
    // d.style.border = "1px solid red"

    board.addEventListener("click", getClickPosition, false);
    let theThing = document.getElementById("jae"); 
    let meter = document.getElementById("teleportation_meter"); 
    let counter = 0; 
    let teleportation_meter = false; 

    function pause() {
        window.setInterval(increase_teleportation_meter, 3000)
        window.setTimeout(allow_teleport, 3000)
    }

    pause(); 

   function increase_teleportation_meter(){
        let current_width = meter.style.width; 
        let num = parseInt(current_width.split("px")[0]);  
        let new_px = num + 30;
        
        if (new_px <= 90){
            meter.style.width = new_px + "px"; 
        }
        
   }
    function allow_teleport () {
        teleportation_meter = true; 
    }

    function getClickPosition(e) {
        if (teleportation_meter) {
            var parentPosition = getPosition(e.currentTarget);
            var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
            var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);

         
            teleportation_meter = false; 
            theThing.style.left = xPosition + "px";
            theThing.style.top = yPosition + "px";
            meter.style.width = "0px";
            //counter = 0; 
            pause(); 
        }

    }
    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                // for all other non-BODY elements
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