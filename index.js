// Code your solutions in this file

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}


function countDown(integer) {
    let counter = 0
    while (counter <= integer ) {
        console.log(integer - counter);
        counter++;
    }
}
