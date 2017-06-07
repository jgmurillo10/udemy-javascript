/*

Asynchronous: more than one at a time


the event queue won't be processed until the execution stack is empty


*/

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler(a) {
    console.log(a);
    console.log('click event!');
}

console.log('before listening to the click');
document.addEventListener('click', clickHandler);
console.log('after listening to the click');


waitThreeSeconds();
console.log('finished execution');
