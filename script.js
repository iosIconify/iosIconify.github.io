function goToPage(str) {
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style = 'display: none;';
  }
  document.getElementById('page-' + str).style = 'display: block;';
}

$('#get_started').click( function(e) {e.preventDefault(); goToPage('form'); return false; } );

function eventTrigger (e) {
    if (! e)
        e = event;
    return e.target || e.srcElement;
}
