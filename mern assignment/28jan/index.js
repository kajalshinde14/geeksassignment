//reverse order
var arr=[] ;
var arr1 = [];

var n=prompt("enter length of array");

for( var i=0; i<n;i++ ) {
arr[i]=prompt('enter elements in an array '+(i+1));
}

for (i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);


//Fibonacci 

 var n=prompt("enter No");
n=parseInt(n)
var first = 0
var second = 1;
        console.log(first);
console.log(second);
    for (var i = 1; i < n; i++) 

   {     
console.log(second);
        var next = first + second ; first = second;

        second = next;

    }