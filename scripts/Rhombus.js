function rhombusCalculate() {
  const base = getInputFieldValueById("d1");
  const hight = getInputFieldValueById("d2");

  const area = 0.5 * base * hight;

  const showTime = document.getElementById("area-calculation");
  const h2 = document.createElement("h2");
  h2.innerText = area;
  showTime.appendChild(h2);
}

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

// time to show the game!
