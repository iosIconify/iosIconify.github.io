function goToPage(str) {
  var pages = document.getElementsByTagName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  document.getElementById('page-' + str).style.display = 'block';
}

goToPage('welcome');
