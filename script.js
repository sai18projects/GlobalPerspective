var value = document.getElementById('content').value;
var title = document.getElementById('title');
var maincontext = document.getElementById('main-content');
function content() {
  if ((value = 'TRR')) {
    title.innerHTML = 'Team Research Report';
    maincontext.innerHTML = 'test!';
  }
}
