function greet(name) {
    console.log("Hello," + name + "!");

}
function 
sayHelloWithDelay(callback) {
setTimeout(function()  {
    callback("Navin");

}, 2000);
}
sayHelloWithDelay(greet);