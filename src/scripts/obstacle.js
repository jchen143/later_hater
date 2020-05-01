import Board from './board'

class Obstacle{
    constructor(xPos, yPos, right_limit, left_limit, upper_limit, lower_limit, player_x, player_y){
        this.randomPoint = this.randomPoint.bind(this); 
        this.right_limit = right_limit;
        this.left_limit= left_limit;
        this.lower_limit = lower_limit;
        this.upper_limit = upper_limit;
        this.player_x = player_x;
        this.player_y = player_y;
        this.move = this.move.bind(this); 

        if (xPos && yPos){
            this.left = xPos; 
            this.top = yPos; 
        }
        else{
            let random_point = this.randomPoint();
            this.left = random_point.x; 
            this.top = random_point.y; 
            
        }

        this.makeObstacle(); 
        //debugger
        //this.move(); 
    }

    makeObstacle(){
        this.new_obstacle = document.createElement("div"); 
        this.new_obstacle.classList.add("hater"); 

        this.new_obstacle.style.position = "relative"; 
        this.new_obstacle.style.left = this.left + "px";
        this.new_obstacle.style.top = this.top + "px";

        let board = document.getElementById("board");
        board.appendChild(this.new_obstacle); 
    }

    randomPoint(){
        let xPos = 0; 
        let yPos = 0; 

        xPos = Math.random() * (this.right_limit - this.left_limit) + this.left_limit;
        yPos = Math.random() * (this.lower_limit - this.upper_limit) + this.upper_limit;

        while(Math.abs(xPos - this.player_x) < 200 || Math.abs(yPos - this.player_y) < 200){
            xPos = Math.random() * (this.right_limit - this.left_limit) + this.left_limit;
            yPos = Math.random() * (this.lower_limit - this.upper_limit);
        }
    

        return {x: xPos, y: yPos}
    }

    move(x, y, paused){
       //this.new_obstacle.style.transform =; 
        if (!paused){
            if(this.left < x  + 10){
                let num_px = parseInt(this.new_obstacle.style.left.split("px")[0]); 
                num_px += 2;
                this.left = num_px; 

                this.new_obstacle.style.left = this.left + "px"; 
            }
            if(this.left > x + 10){
                let num_px = parseInt(this.new_obstacle.style.left.split("px")[0]);
                num_px -= 2;
                this.left = num_px;

                this.new_obstacle.style.left = this.left + "px"; 
            }
                if (this.top < y - 10) {
                    let num_px = parseInt(this.new_obstacle.style.top.split("px")[0]);
                    num_px += 2;
                    this.top = num_px;

                    this.new_obstacle.style.top = this.top + "px";
                }
                if (this.top > y - 10) {
                    let num_px = parseInt(this.new_obstacle.style.top.split("px")[0]);
                    num_px -= 2;
                    this.top = num_px;

                    this.new_obstacle.style.top = this.top + "px";
                }
    }

      // debugger
    }



}


export default Obstacle 