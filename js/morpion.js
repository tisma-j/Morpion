var cases = document.querySelectorAll('.case');

var tourDuJoueur1 = true;

var partieGagnee = false;

var changementPlayer = document.querySelector('#changeplayer');

var gagnant = document.querySelector('.win');

var terminer = false;

var combinaison = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

var afficherSymbole = function(caseCourante){
  if (caseCourante.classList.length < 2 && terminer == false) {
    if (tourDuJoueur1){
      caseCourante.classList.add('cross');
      changementPlayer.textContent = "J2";
      tourDuJoueur1 = !tourDuJoueur1;
    } else{
      caseCourante.classList.add('round');
      tourDuJoueur1 = !tourDuJoueur1;
      changementPlayer.textContent = "J1";
    }
  }
};

var verifierGagnant = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaison.forEach(function(combinaison) {
		if (
			cases[combinaison[0]].classList[1] == cases[combinaison[1]].classList[1] &&
      cases[combinaison[1]].classList[1] == cases[combinaison[2]].classList[1] &&
      cases[combinaison[0]].classList[1] != undefined)
			{
      gagnant.classList.add('winnerj1');
      gagner();
		  }
	});
};

var gagner = function () {
  if (tourDuJoueur1){
    gagnant.textContent = "Winner is J2";
    console.log('j1 a gagné');
  }
  else {
    gagnant.textContent = "Winner is J1";
    console.log('j2 a gagné');
  }
  terminer = true;
}

for (var i = 0; i < cases.length; i++) {
    cases[i].addEventListener('click', function() {
      if (!partieGagnee) {
        afficherSymbole(this);
        verifierGagnant();
      }
    });
  }
