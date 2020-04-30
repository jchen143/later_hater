import Board from './board'
import Player from './player'
import Obstacle from './obstacle'
import Timer from './teleportation_timer'

class Game {
    constructor(){
    this.increase_teleportation_meter = this.increase_teleportation_meter.bind(this); 
    this.increaseScore= this.increaseScore.bind(this); 
    this.getClickPosition = this.getClickPosition.bind(this); 
    this.countUp = this.countUp.bind(this);
    this.paused = true; 
    this.haters = []; 
    this.increaseScore = this.increaseScore.bind(this); 
    this.start = this.start.bind(this); 
    this.haterCheck = this.haterCheck.bind(this); 

      this.meter = document.getElementById("teleportation_meter");
      
      this.lost = false; 
      this.board = document.getElementById("board"); 
        this.theThing = document.getElementById("jae");
        this.score = document.getElementById("scoreboard");
        this.score_num = 0; 
        this.teleportation_meter = false; 
    }

    increase_teleportation_meter() {
        
        
        let current_width = this.meter.style.width;
            let num = parseInt(current_width.split("px")[0]);
            let new_px = num + 100;

            if (new_px <= 300) {
                this.meter.style.width = new_px + "px";
            }

            let new_width = this.meter.style.width;
            let new_num = parseInt(new_width.split("px")[0])
            if (new_num >= 300) {
                this.timer.stop();
            }

    }

    countUp() {
        this.counter = setInterval(this.increaseScore, 10)
    }

    increaseScore() {
        //Check if any haters in the hater array have the same posiiton as Jae
        if(this.haterCheck()){
           // debugger
            this.lost = true; 
        }
        if (!this.lost && !this.paused) {
            this.score_num += 1;
            var textnode = document.createTextNode(this.score_num);

            if (this.score.childNodes.length !== 0) {
                this.score.removeChild(this.score.childNodes[0]);
            }

            this.score.appendChild(textnode);
        }

        //if this.lost 
        if(this.lost){
            //debugger
            this.stop();
            clearInterval(this.counter);
            let lost_modal = document.getElementById("lost-modal-background"); 
            let lost_modal_child = document.getElementById("lost-modal-child");
            let score_text = document.createTextNode(this.score_num)
            lost_modal_child.appendChild(score_text); 
            lost_modal.style.display = "block"; 
           
        }

    }

    haterCheck(){
        let thing_left = parseInt(this.theThing.style.left.split('px')[0]);
        let thing_top = parseInt(this.theThing.style.top.split("px")[0]); 

        for(let i = 0; i < this.haters.length; i++){
            
            if((thing_left + 30 <= this.haters[i].left + 30 && thing_left + 30 >= this.haters[i].left - 30) && (thing_top - 37 <= this.haters[i].top + 30 && thing_top - 37 >= this.haters[i].top - 30)){
                
                return true; 
            }
        }

        return false; 
    }
    start() {
        this.timer.start();
        let interval; 

        if(this.meter.style.width === "0px"){
            interval = 3000;
        }else if(this.meter.style.width === "100px"){
            interval = 2000;
        }else if( this.meter.style.width === "200px"){
            interval = 1000; 
        }else{
            interval = 0; 
        }

        this.teleportation = setTimeout(this.allow_teleport, interval)
    }

    allow_teleport() {
    
        this.teleportation_meter = true;
    }

    getClickPosition(e) {
        e.preventDefault();
        
      
        if (teleportation_meter) {
            
            let parentPosition = this.getPosition(e.currentTarget);
            let xPosition = e.clientX - parentPosition.x - (this.theThing.clientWidth / 2);
            let yPosition = e.clientY - parentPosition.y - (this.theThing.clientHeight / 2);
            
            teleportation_meter = false;
            this.theThing.style.left = xPosition + "px";
            this.theThing.style.top = yPosition + "px";
            this.meter.style.width = "0px";



            let centerX = this.board.clientWidth / 2;
            let centerY = this.board.clientHeight / 2 - this.theThing.clientHeight; 
            
            let right_limit = centerX + centerX; 
            let left_limit = centerX - centerX; 
            let upper_limit = centerY - (centerY + this.theThing.clientHeight); 
            let lower_limit = centerY + (centerY + this.theThing.clientHeight - 10); 
            

            //create a new hater and add it to the hater array
            this.haters.push(new Obstacle (null, null, right_limit, left_limit, upper_limit, lower_limit, xPosition, yPosition)); 
           // debugger
            this.start();
        }
        else {

        }

    }

    getPosition(el) {
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
    run() {
        this.board.addEventListener("click", this.getClickPosition, false);
        this.timer = new Timer(this.increase_teleportation_meter, 1000); 
        //this.teleport_timer = new Timer(this.allow_teleport, 3000);
        //this.haters.push (new Obstacle) 
        //this.counter = setInterval(this.increaseScore, 10);
        this.countUp();
        this.start();
        this.paused = false; 
    }

    stop(){
        //stops the bar from moving up
        this.timer.stop(); 
       
        //stops the score counter 
        this.paused = true; 
        clearInterval(this.counter);
        clearInterval(this.teleportation);
    }
}
    
export default Game