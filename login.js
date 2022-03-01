document.querySelector("button").addEventListener("click", login);
var regUser = JSON.parse(localStorage.getItem("uerData"));
//console.log(regUser)

function login(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  for (let i = 0; i < regUser.length; i++) {
    if (regUser[i].Email === email && regUser[i].Password === pass) {
      alert("signUp succsesfully");
      window.location.href = "menu.html";
    }
  }
}
