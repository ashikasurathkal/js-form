let name =document.getElementById("name");
let email =document.getElementById("email");
let pass =document.getElementById("pass");
let btn =document.getElementById("btn");
let para =document.getElementById("para");

function cl(){
    document.getElementById('para').innerHTML= name.value+ "<br> "+email.value+"<br> "+pass.value ;
  alert('submit successfully');
}
