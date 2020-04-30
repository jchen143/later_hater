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
    }

    makeObstacle(){
        let new_obstacle = document.createElement("div"); 
        new_obstacle.classList.add("hater"); 

        new_obstacle.style.position = "relative"; 
        new_obstacle.style.left = this.left + "px";
        new_obstacle.style.top = this.top + "px";

        let board = document.getElementById("board");
        board.appendChild(new_obstacle); 
    }

    randomPoint(){
        let xPos = 0; 
        let yPos = 0; 

        xPos = Math.random() * (this.right_limit - this.left_limit) + this.left_limit;
        yPos = Math.random() * (this.lower_limit - this.upper_limit) + this.upper_limit;

        while(Math.abs(xPos - this.player_x) < 50 || Math.abs(yPos - this.player_y) < 50){
            xPos = Math.random() * (this.right_limit - this.left_limit) + this.left_limit;
            yPos = Math.random() * (this.lower_limit - this.upper_limit) + this.upper_limit;
        }
    

        return {x: xPos, y: yPos}
    }

    move(){
        
    }


}


export default Obstacle 