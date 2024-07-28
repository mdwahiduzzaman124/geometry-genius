// get triangle base
function triangleCalculate() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  //get triangle hight
  const triangleHightInput = document.getElementById("triangle-hight");
  const triangleHightText = triangleHightInput.value;
  const hight = parseFloat(triangleHightText);

  // Total area calculation
  const area = 0.5 * base * hight;

  //where to add
  const areaCalculation = document.getElementById("area-calculation");
  //what to be added
  const p = document.createElement("p");
  p.innerText = ("Triangle area:", area);
  //Final step: add the child
  areaCalculation.appendChild(p);
}
