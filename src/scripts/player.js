class Player {
    constructor(start_pos){

        this.pos = start_pos; 
        this.img = "./src/assets/jaebae.png"
    }

    makePlayer(){
        let player = document.createElement("img"); 
        player.src = this.img; 
        player.style.height = "56px"; 
        player.style.width = "70px";

        document.getElementById("board").appendChild(player); 
    }

    destroyPlayer(){

    }



}

