function addName() {

  var arrX = document.getElementsByClassName("textbox");
  var arrCountry = ["Israel", "USA", "Italy", "Holland", "France"];
  for (var i = 0; i < arrX.length; i++) {
    arrX[i].innerHTML = arrCountry[i];
  }
}

function delName() {

  var arrX = document.getElementsByClassName("textbox");
  for (var i = 0; i < arrX.length; i++) {
    arrX[i].innerHTML = "";
  }
}