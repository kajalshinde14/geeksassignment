//Using array take user input and print the maximum number of all of that elements. 

var inputNo=[] ;
var size =prompt("enter length of array");

for( var i=0; i<size;i+=1 ) {
inputNo[i]=prompt('enter elements in an array '+(i+1));
}
console. log(Math.max(...inputNo)) ;