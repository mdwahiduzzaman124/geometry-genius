function parallelogramBase() {
  const parallelogramBaseInput = document.getElementById("Parallelogram-base");
  const ParallelogramBaseText = parallelogramBaseInput.value;
  const parallelogramBase = parseFloat(ParallelogramBaseText);

  const ParallelogramHightInput = document.getElementById(
    "Parallelogram-Hight"
  );
  const ParallelogramHightText = ParallelogramHightInput.value;
  const parallelogramHight = parseFloat(ParallelogramHightText);

  const ParallelogramArea = parallelogramBase * parallelogramHight;

  // Time to show the game!
  const areaToShow = document.getElementById("area-calculation");
  const h2 = document.createElement("h2");
  h2.innerText = ParallelogramArea;
  areaToShow.appendChild(h2);
}
