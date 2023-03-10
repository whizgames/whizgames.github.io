function search_on() {
  var inp, strain, ul, li, a, i;
  inp = document.getElementById("searchbar");
  strain = inp.value.toUpperCase();
  ul = document.getElementById("search");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(strain) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}