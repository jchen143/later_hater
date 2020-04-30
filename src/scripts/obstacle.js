import Board from './board'

class Obstacle{
    constructor(xPos, yPos, direction){
        this.left = xPos; 
        this.top = yPos; 
        this.direction = direction; 

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
}


export default Obstacle 