function saveThree() {
  var area = document.getElementById('heh');
  var conten = area.value;
  localStorage.thirdSave = conten;
}
function loadThree() {
  var area = document.getElementById('heh');
  var yea = localStorage.thirdSave;
  area.value = yea;
}
function saveFour() {
  var area = document.getElementById('heh');
  var conten = area.value;
  localStorage.fourthSave = conten;
}
function loadFour() {
  var area = document.getElementById('heh');
  var yea = localStorage.fourthSave;
  area.value = yea;
}