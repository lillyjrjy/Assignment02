let coinFlip = Math.round(Math.random())
let choice = prompt('Heads or Tails?')
let head
(coinFlip ===0)? head = false : head = true
if(choice === 'Heads'){
    if(head){
        window.alert('The flip was heads and you chose heads...you win!')
    }else{
        window.alert('The flip was tails but you chose heads...you lose!')
    }
}else{
    if(head){
        window.alert('The flip was heads but you chose tails...you lose!')        
    }else{
        window.alert('The flip was tails and you chose tails...you win!')
    }
}