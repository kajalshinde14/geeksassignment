function validate ( )
{
    valid = true;

    var password =document.getElementById("input-field).value");
    var confirmpassword =document.getElementById("output-field").value;
  if(password !==confirmpassword){
      alert("passwords do not match.");
      return false;
  }
  alert(passwords matches go to login.);
  return true;