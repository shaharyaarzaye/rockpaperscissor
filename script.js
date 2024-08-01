document.querySelector(".rock").addEventListener('click' , function(){
    const randomNumber= Math.random();

            let computerMove = '';

            if(randomNumber >=0 && randomNumber < 1/3){
            computerMove = 'Rock';
            }
            else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove='Paper';
            }
            else if ( randomNumber >=2/3 && randomNumber < 1){
                computerMove = 'Scissors';
            }

            let result= '';

            if(computerMove==='Rock'){
                result ='Tie';
            }
            else if(computerMove='Paper'){
                result='Lose';
            }
            else if(computerMove='Scissors'){
                result= 'win';
            }
            alert(`You picked Rock. The Computer Picked ${computerMove}.So It's a ${result}.`)
            
})

document.querySelector(".Paper").addEventListener('click' , function(){
    const randomNumber= Math.random();

    let computerMove = '';

    if(randomNumber >=0 && randomNumber < 1/3){
    computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove='Paper';
    }
    else if ( randomNumber >=2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    let result= '';

    if(computerMove==='Rock'){
        result ='Win';
    }
    else if(computerMove='Paper'){
        result='Tie';
    }
    else if(computerMove='Scissors'){
        result= 'Lose';
    }
    alert(`You picked Paper. The Computer Picked ${computerMove}. So It's a ${result}.`) 
        
})

document.querySelector(".Scissor").addEventListener('click' , function(){
    
    const randomNumber= Math.random();
    let computerMove = '';

    if(randomNumber >=0 && randomNumber < 1/3){
    computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove='Paper';
    }
    else if ( randomNumber >=2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    let result= '';

    if(computerMove==='Rock'){
        result ='Lose';
    }
    else if(computerMove='Paper'){
        result='Win';
    }
    else if(computerMove='Scissors'){
        result= 'Tie';
    }
    alert(`You picked Scissor. The Computer Picked ${computerMove}. So It's a ${result}.`)

})

