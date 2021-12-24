var value = document.getElementById('content').value;
var title = document.getElementById('title');
var maincontext = document.getElementById('main-content');
function content() {
  var value = document.getElementById('content').value;
  var title = document.getElementById('title');
  var maincontext = document.getElementById('main-content');

  if (value == 'TRR') {
    console.log('hi');
    title.textContent = 'Team Research Report';
    maincontext.innerHTML = 'test!';
  }
}
