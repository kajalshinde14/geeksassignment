//prime no program 
var n=prompt("Enter No") ;
n=parseInt(n) ;
var isPrime;
for (var i = 2; i <= n; i++) 
{
isPrime=1;
for (var j= 2; j < i/2; j++)
{
if(i%j==0)
{ isPrime=0;
break ;
}
}
if(isPrime==1)
{ console.log(i);}
}

//string

var count=0;
var c;
var i;
var ch =prompt("enter the string");
for(i=0;i<=ch.length;i++)
{
c=ch.charAt(i);
if(c=="a"||c=="A" ||c=="e"||c=="E" ||c=="i"||c=="I"||c=="o"||c=="O"||c=="u"||c=="U")
{
count++;
}
}
console.log(count);