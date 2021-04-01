function outer() {
    console.log(x);
    var inner = function() { 
        let x = 10;
        console.log(x); 
    };
    // inner();
}
debugger;
console.log(x);
outer();
