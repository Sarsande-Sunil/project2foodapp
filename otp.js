var id;
function done() {
  id = setTimeout(function () {
    alert("Your order is accepted ");
  }, 000);

  id = setTimeout(function () {
    alert(" Your order is being cooked  ");
  }, 3000);

  id = setTimeout(function () {
    alert(" Your order is ready  ");
  }, 8000);

  id = setTimeout(function () {
    alert(" Order out for delivery   ");
  }, 10000);

  id = setTimeout(function () {
    alert("  Order delivered  ");
  }, 12000);
}
