function goToPage(str) {
  //alert('hi!');
  //alert(document.getElementsByClassName('page'));
  var pages = document.getElementsByTagName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
    alert(pages[i].style);
  }
  document.getElementById('page-' + str).style.display = 'block';
}

goToPage('welcome');
