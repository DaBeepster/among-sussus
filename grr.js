function saveThree() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.thirdSave;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.thirdSave = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function loadThree() {
  var area = document.getElementById('heh');
  var yea = localStorage.thirdSave;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function saveFour() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.fourthSave;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.fourthSave = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function loadFour() {
  var area = document.getElementById('heh');
  var yea = localStorage.fourthSave;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function saveFive() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.fiveSave;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.fiveSave = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function loadFive() {
  var area = document.getElementById('heh');
  var yea = localStorage.fiveSave;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function saveSix() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.sexthSave;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.sexthSave = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function loadSix() {
  var area = document.getElementById('heh');
  var yea = localStorage.sexthSave;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function saveSeven() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.sevenSave;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.sevenSave = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function loadSeven() {
  var area = document.getElementById('heh');
  var yea = localStorage.sevenSave;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
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
  var confirm = prompt("Are you sure you want to overwrite this save? Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.importantSave = content;
    alert("saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("save cancelled");
  } else {
    console.log("suss");
  }
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