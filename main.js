function txt() {
  var place = document.getElementById("heh");
  var tex = place.value;
  document.getElementById("obe").innerText = tex;
}
function hml() {
  var place = document.getElementById("heh");
  var hm = place.value;
  document.getElementById("obe").innerHTML = hm;
}
function base() {
  var place = document.getElementById("heh");
  var lol = place.value;
  var ah = btoa(lol);
  place.value = ah;
}
function notbase() {
  var place = document.getElementById("heh");
  var ok = place.value;
  var ko = atob(ok);
  place.value = ko;
}
function enur() {
  var place = document.getElementById("heh");
  var txt = place.value;
  var nice = encodeURIComponent(txt);
  place.value = nice;
}
function deur() {
  var place = document.getElementById("heh");
  var txt = place.value;
  var nice = decodeURIComponent(txt);
  place.value = nice;
}
function save1() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.piss;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.piss = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function load1() {
  var area = document.getElementById('heh');
  var yea = localStorage.piss;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function save2() {
  var area = document.getElementById('heh');
  var conten = area.value;
  var sav = localStorage.sav2;
  var confirm = prompt(`This slot currently contains ${sav}. Are you sure you want to overwrite?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    localStorage.sav2 = conten;
    alert("Saved!");
  } else if (confirm.toUpperCase() == "N") {
    alert("Save Cancelled");
  } else {
    console.log("Ag");
  }
}
function load2() {
  var area = document.getElementById('heh');
  var yea = localStorage.sav2;
  var confirm = prompt(`Currently saved: ${yea}. Load save?`, "Y/N");
  if (confirm.toUpperCase() == "Y") {
    area.value = yea;
  } else if (confirm.toUpperCase() == "N") {
    console.log("ok");
  } else {
    console.log("hm");
  }
}
function toRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
        }
    }

    return result;
}

function toNumber(roman) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let current = romanNumerals[roman[i]];
        let next = romanNumerals[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}
function numToRoman() {
  var num = document.getElementById('heh').value;
  var ronum = toRoman(num);
  document.getElementById('heh').value = ronum;
}
function romanToNum() {
  var rome = document.getElementById('heh').value;
  var numb = toNumber(rome);
  document.getElementById('heh').value = numb;
}
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
function decodeHtml() {
  var thetext = document.getElementById('heh').value;
  var area = document.getElementById('sus');
  document.getElementById('sus').innerHTML = thetext;
  document.getElementById('heh').value = area.innerText;
  document.getElementById('sus').innerText = "";
}
function setTitle() {
  var t = document.getElementById('heh').value;
  if (t == "") {
    document.title = "My Silly Stuff";
  } else {
    document.title = t;
  }
}