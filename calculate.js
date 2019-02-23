const plusFunc = () => {
  const plus = document.getElementById('plus');
  let n1 = document.getElementById('n1').value;
  n1 = parseInt(n1);
  let n2 = document.getElementById('n2').value;
  n2 = parseInt(n2);
  let result = n1 + n2;
  document.getElementById('result').innerHTML = result;
}

const minusFunc = () => {
  const minus = document.getElementById('minus');
  let n1 = document.getElementById('n1').value;
  n1 = parseInt(n1);
  let n2 = document.getElementById('n2').value;
  n2 = parseInt(n2);
  let result = n1 - n2;
  document.getElementById('result').innerHTML = result;
}

const multFunc = () => {
  const mult = document.getElementById('mult');
  let n1 = document.getElementById('n1').value;
  n1 = parseInt(n1);
  let n2 = document.getElementById('n2').value;
  n2 = parseInt(n2);
  let result = n1 * n2;
  document.getElementById('result').innerHTML = result;
}

const divideFunc = () => {
  const divide = document.getElementById('divide');
  let n1 = document.getElementById('n1').value;
  n1 = parseInt(n1);
  let n2 = document.getElementById('n2').value;
  n2 = parseInt(n2);
  if (n2 === 0) {
    alert('На ноль делить нельзя :)');
  }
  let result = n1 / n2;
  document.getElementById('result').innerHTML = result;
}

const resetFunc = () => {
  const reset = document.getElementById('reset');
  document.getElementById('n1').value = '';
  document.getElementById('n2').value = '';
  document.getElementById('result').innerHTML = 0;
}

plus.addEventListener('click', plusFunc);
minus.addEventListener('click', minusFunc);
mult.addEventListener('click', multFunc);
divide.addEventListener('click', divideFunc);
reset.addEventListener('click', resetFunc);