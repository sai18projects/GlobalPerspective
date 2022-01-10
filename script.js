document.getElementById('hi').style.display = 'none';
var value = document.getElementById('content').value;
var title = document.getElementById('title');

var gp =
  'Global Perspectives is a subject in which  students at education develop outstanding transferable skills, including critical thinking, research and collaboration. It is fun place in which where do research and have fun. For 6th Grade we did reseach on the continet called Ocienia, Induvidual Research Report, Team Research Report and many more';

function content() {
  var value = document.getElementById('content').value;
  var title = document.getElementById('title');
  var homeContent = document.getElementById('home-content');

  if (value == 'TRR') {
    title.textContent = 'Team Research Report';
    homeContent.innerHTML = 'Work in Progress!!';

    homeContent.style.display = 'block';
    document.getElementById('irr').style.display = 'none';
  } else if (value == 'Home') {
    title.textContent = 'What is Global Perspective?';
    homeContent.innerHTML =
      'Global Perspectives is a subject in which  students at education develop outstanding transferable skills, including critical thinking, research and collaboration. It is fun place in which where do research and have fun. For 6th Grade we did reseach on the continet called Ocienia, Induvidual Research Report, Team Research Report and many more';

    homeContent.style.display = 'block';
    document.getElementById('irr').style.display = 'none';
  } else if (value == 'IRR') {
    title.innerHTML = 'Induvidual Research Report';

    homeContent.style.display = 'none';
    document.getElementById('irr').style.display = 'block';

  } else if (value == 'Liberty') {
    title.innerHTML = 'Work in progress';

    document.getElementById('Liberty').style.display = 'block';
  }
}
