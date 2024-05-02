function poob() {
  var f = new URLSearchParams(window.location.search),
      thing = window.location.href.split("?")[0];
  alert(f);
}