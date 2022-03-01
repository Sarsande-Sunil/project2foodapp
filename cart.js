async function getData() {
  try {
    let url = `https://www.themealdb.com/api/json/v1/1/random.php?s=Arrabiata`;

    let res = await fetch(url);
    let data = await res.json();
    let user = data.meals;
    showData(user);
    console.log("data", user);
  } catch (error) {
    console.log(error);
  }
}
getData();

function showData(user) {
  user.forEach(function (el) {
    let maidiv = document.getElementById("fooddiv");
    let div = document.createElement("div");
    maidiv.appendChild(div);

    let img = document.createElement("img");
    img.src = el.strMealThumb;

    let p1 = document.createElement("p");
    p1.innerText = el.strCategory;

    var x = Math.floor(Math.random() * 500 + 1);

    let price = document.createElement("p");
    price.innerText = "Price_" + x;

    let btn = document.createElement("button");
    btn.innerText = "GotoPayment";

    btn.addEventListener("click", function () {
      payment();
    });

    let total = document.createElement("p");
    total.innerText = "Total_Price_" + x;

    div.append(img, p1, price, total, btn);
  });
}

function payment(user) {
  window.location.href = "payment.html";
}
