var userArr = JSON.parse(localStorage.getItem("uerData")) || [];
function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let pass = document.getElementById("password").value;

  var userCredntials = {
    Name: name,
    Email: email,
    Number: number,
    Password: pass,
  };

  userArr.push(userCredntials);
  localStorage.setItem("uerData", JSON.stringify(userArr));
  window.location.href = "login.html";
}
