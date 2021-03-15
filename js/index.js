function fillNumbers(numb) {

  if (document.getElementById('screen').value === '0') {
    document.getElementById('screen').value = '';
    document.getElementById('screen').value += numb;
  } else {
    document.getElementById('screen').value += numb;
  };
};

function clearAll() {

  document.getElementById('screen').value = '0';

};

function results() {

// eval = permite ao javascript realizar operações a partir de elementos dentro de uma string. 

  var results = 0;
  results = document.getElementById('screen').value;

  document.getElementById('screen').value = '';
  document.getElementById('screen').value = eval(results);

};


