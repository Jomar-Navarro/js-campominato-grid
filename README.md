js-campominato-grid
===

**Consegna**

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## SVOLGIMENTO

1.  Creo delle variabili per prendere gli elementi HTML;
2.  Creo una funzione di reset che mi resetta gli elementi nell'HTML;
3.  Creo un evento click per il quale mi crea la griglia celle;
4.  Creo una funzione per con all'interno un ciclo;
5.  Creo una funzione in cui mi crea un div con un classe 'square';
6.  Creo un evento che al click delle singole celle se non c'é la classe 'clicked' il numero e la il colore non vengono mostrati;
7. Aggiungo un toggle per farsí che cliccando il bottone una secona volta tolgo o aggiungo la classe 'clicked.