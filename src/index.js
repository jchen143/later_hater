import './styles/index.scss'
import Player from './scripts/player'
import Timer from './scripts/teleportation_timer'
import Obstacle from './scripts/obstacle'
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {

    let lets_play = true; 
    //Modal
    let modal = document.getElementById("modal-background");
    let modal_child = document.getElementById("modal-child");
    let modal_button = document.getElementById("modal-button");
    let question = document.getElementById("question")

    //modal.addEventListener('click', closeModal);
    modal_button.addEventListener('click', closeModal); 
    question.addEventListener('click', openModal);
    let game = new Game(); 

    function closeModal(e){
        e.preventDefault(); 
        modal.style.display = 'none'; 
        modal_child.style.display = 'none'; 
        game.run();
    }

    function openModal(e){
        e.preventDefault(); 
        modal.style.display = 'block';
        modal_child.style.display = 'block'; 
        game.stop();
    }
    //Modal
   
  
        
    
    
})