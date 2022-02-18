//take 3 integer number  input from user and print the minimum number of that 3 number
var n1=prompt("Enter number 1");
var n2=prompt("Enter number 2");
var n3=prompt("Enter number 3");
n1=parseInt(n1);
n2=parseInt(n2);
n3=parseInt(n3);
if(n1<=n2 && n1<=n3)
{alert(n1);
}
else if (n2<=n1 && n3<=n2)
{ alert(n2); }
else
{
alert(n3);}


//vowel or consonant program 
var input=prompt("enter a character ")
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
console.log("It is a vowel");
} else if ((input>= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
  console.log("It is a consonant");
} else {
    console.log("Invalid input ");}