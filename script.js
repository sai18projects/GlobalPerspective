var value = document.getElementById('content').value;
var title = document.getElementById('title');

var maincontext = document.getElementById('main-content');
var gp =
  'Global Perspectives is a subject in which  students at education develop outstanding transferable skills, including critical thinking, research and collaboration. It is fun place in which where do research and have fun. For 6th Grade we did reseach on the continet called Ocienia, Induvidual Research Report, Team Research Report and many more';

function content() {
  var value = document.getElementById('content').value;
  var title = document.getElementById('title');
  var maincontext = document.getElementById('main-content');

  if (value == 'TRR') {
    title.textContent = 'Team Research Report';
    maincontext.innerHTML = 'Work in Progress!!';
  } else if (value == 'Home') {
    title.textContent = 'What is Global Perspective?';
    maincontext.innerHTML =
      'Global Perspectives is a subject in which  students at education develop outstanding transferable skills, including critical thinking, research and collaboration. It is fun place in which where do research and have fun. For 6th Grade we did reseach on the continet called Ocienia, Induvidual Research Report, Team Research Report and many more';
  } else if(value == "IRR"){
    title.textContent = 'Education'
    maincontext.textContent = "<iframe src="https://docs.google.com/document/d/e/2PACX-1vQc9irotNwh0HGGL6FpVmtrsukXbiGYsX8obn0WeD4a1wH943DBc3xD8UTSxHH95QVz0dgOK7W8BTD_/pub?embedded=true"></iframe>"
  }
}
