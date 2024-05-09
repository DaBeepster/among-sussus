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
function saveFive() {
  var area = document.getElementById('heh');
  var conten = area.value;
  localStorage.fiveSave = conten;
}
function loadFive() {
  var area = document.getElementById('heh');
  var yesh = localStorage.fiveSave;
  area.value = yesh;
}
function saveSix() {
  var areea = document.getElementById('heh');
  var contente = areea.value;
  localStorage.sexthSave = contente;
}
function loadSix() {
  var areea = document.getElementById('heh');
  var yeet = localStorage.sexthSave;
  areea.value = yeet;
}
function saveSeven() {
  var ahe = document.getElementById('heh');
  var stuf = ahe.value;
  localStorage.sevenSave = stuf;
}
function loadSeven() {
  var ahe = document.getElementById('heh');
  var poh = localStorage.sevenSave;
  ahe.value = poh;
}
function saveTemp() {
  var gyatt = document.getElementById('heh');
  var skibidi = gyatt.value;
  localStorage.tempSave = skibidi;
}
function loadTemp() {
  var ohio = document.getElementById('heh');
  var sigma = localStorage.tempSave;
  ohio.value = sigma;
}
function saveImp() {
  var box = document.getElementById('heh');
  var content = box.value;
  localStorage.importantSave = content;
}
function loadImp() {
  var box = document.getElementById('heh');
  var savedcontent = localStorage.importantSave;
  box.value = savedcontent;
}
function linkTemplate() {
  var thing = atob("PGEgaHJlZj0iIiB0YXJnZXQ9Il9ibGFuayI+TGluazwvYT4=");
  document.getElementById('heh').value = thing;
}
function iframeTemplate() {
  var thingy = atob("PGlmcmFtZSBzcmM9IiIgd2lkdGg9IjY5MHB4IiBoZWlnaHQ9IjY5MHB4Ij48L2lmcmFtZT4=");
  document.getElementById('heh').value = thingy;
}
function imageTemplate() {
  var imag = atob("PGltZyBzcmM9IiIgYWx0PSJ3aG9vcHMiIHdpZHRoPSI0ODBweCIvPg==");
  document.getElementById('heh').value = imag;
}
function encodeAllHtmlEntities(str) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        return `&#${code};`;
    }).join('');
}
function encodeHtml() {
  var thetext = document.getElementById('heh').value;
  var encodedText = encodeAllHtmlEntities(thetext);
  document.getElementById('heh').value = encodedText;
}