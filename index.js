function writeCards(array, event){
    let messages = [];
    
    for (let i = 0;i < array.length; i++){
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }

    return messages;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}
// Code your solutions in this file
