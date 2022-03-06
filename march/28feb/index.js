function fizzBuzzSeries() {
    var input = prompt("Enter a number :");

    if (isNaN(input)) {
        document.write("Please enter a valid number!!!");
    
}

else{ 
    inp = parseInt(input);
    for (var i = 1; i <= input; i++) {
    var result=((i % 3 && i % 5 == 0) ? (i + 'FizzBuzz') : (i % 3) ? (i + 'Fizz') : (i % 5) ? (i + 'Buzz') : i);
document.write(' '+result);
document.write("<br />")
}

}

};