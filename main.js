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
  var AH = document.getElementById("heh");
  var txt = AH.value;
  localStorage.piss = txt;
}
function load1() {
  var hm = localStorage.piss;
  document.getElementById("heh").value = hm;
}
function save2() {
  var content = document.getElementById("heh");
  var txt = content.value;
  localStorage.sav2 = txt;
}
function load2() {
  var tex = localStorage.sav2;
  document.getElementById("heh").value = tex;
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