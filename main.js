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