window.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.innerText = "Add Square";
  document.body.appendChild(btn);

  btn.addEventListener("click", addSquare);

  let squareCounter = 1;

  function addSquare() {
    let square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", squareCounter);
    document.body.appendChild(square);

    let squareHover = document.createElement("h1");
    let squareText = document.createTextNode(squareCounter);
    squareHover.appendChild(squareText);

    squareCounter++;

    square.addEventListener("mouseover", function () {
      square.appendChild(squareHover);
    });
    squareHover.addEventListener("mouseout", function () {
      square.textContent = " ";
    });

    square.addEventListener("click", function () {
      let backgroundColor = [
        "black",
        "red",
        "green",
        "yellow",
        "blue",
        "violet",
        "teal",
        "thistle",
        "turquoise",
      ];
      let randomColor = Math.floor(Math.random() * backgroundColor.length);
      square.style.background = backgroundColor[randomColor];
    });

    let currentCount = square.getAttribute("id");
    square.addEventListener("dblclick", function () {
      let nextSquare = square.nextSibling;
      let previousSquare = square.previousSibling;

      if (currentCount % 2 == 0) {
        if (nextSquare) {
          nextSquare.remove();
        } else {
          alert("There isn't a next square");
        }
      } 
    
        if (currentCount % 2 == 1) {
          if (previousSquare) {
            previousSquare.remove();
          } else {
          alert("There isn't a previous square.");
        }
      }
    });
  }
});
