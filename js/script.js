console.log('js-campominato-grid');

const gridContainer = document.querySelector('.grid-container');
const btnPlay = document.querySelector('.btn');

reset(); // Evoco reset se no non funziona;
// Reset;
function reset() {
  gridContainer.innerHTML = '';
}

btnPlay.addEventListener('click', function() {
  init(); // Evoco init se no non mi mostra la creazione del div con la classe 'square';

  // Con questa funzione mi crea le celle fino a 100;
  function init() {
    for (let i = 1; i <= 100; i++) {
        const square = getSquare(i);
        gridContainer.append(square);
      }
  
      // Con una funzione mi creo un div e aggiungo la classe 'square';
      function getSquare(indice) {
        const sq = document.createElement('div');
        sq.className = 'square';
        sq._sqID = indice;

        sq.innerHTML = sq._sqID;
        
        sq.addEventListener('click', function(){
          console.log(this._sqID);
          this.classList.toggle('clicked');
        })
        

        
        return sq;
      }
    }
});

  