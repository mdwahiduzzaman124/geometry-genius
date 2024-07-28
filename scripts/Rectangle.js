function calculateRectangleArea() {
  const rectangleWeightInput = document.getElementById("rectangle-weight");
  const rectangleWeightText = rectangleWeightInput.value;
  const rectangleWeight = parseFloat(rectangleWeightText);

  const rectangleHightInput = document.getElementById("rectangle-hight");
  const rectangleHightText = rectangleHightInput.value;
  const rectangleHight = parseFloat(rectangleHightText);

  const rectangleArea = rectangleWeight * rectangleHight;

  const areaCalculation = document.getElementById("area-calculation");

  const h2 = document.createElement("h2");
  h2.innerText = rectangleArea;
  areaCalculation.appendChild(h2);
}
