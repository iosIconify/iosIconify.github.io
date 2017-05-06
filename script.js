function goToPage(str) {
  //alert('hi!');
  //alert(document.getElementsByClassName('page'));
  var pages = document.getElementsByTagName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style = 'visibility: hidden; width: 0; height: 0;';
    alert(pages[i].style);
  }
  document.getElementById('page-' + str).style = 'visibility: visible;';
}

$('#get_started').click( function(e) {e.preventDefault(); goToPage('form'); return false; } );

function eventTrigger (e) {
    if (! e)
        e = event;
    return e.target || e.srcElement;
}

goToPage('welcome');
