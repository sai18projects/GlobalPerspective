var value = document.getElementById('content').value;
var title = document.getElementById('title');
var maincontext = document.getElementById('main-content');
function content() {
  var value = document.getElementById('content').value;
  var title = document.getElementById('title');
  var maincontext = document.getElementById('main-content');

  if (value == 'TRR') {
    title.textContent = 'Team Research Report';
    maincontext.innerHTML = 'Work in Progress!!';

  } else if(value= 'Home'){
    title.textContent = 'What is Gp?';
    maincontext.innerHTML = ' Global Perspectives is a subject in which  students at education develop outstanding transferable skills, including critical thinking, research and collaboration. It is fun place in which where research an have fun ';
  }
}
