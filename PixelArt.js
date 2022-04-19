// Size Input
var choice = document.querySelector('#sizePicker [type="submit"]');
document;

// Color Input
var table = document.querySelector("#pixelCanvas");
var color = document.querySelector("#colorPicker");

// Create Function

function makeGrid(h,w) {
    pixelCanvas.innerHTML = '';
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;

    for (var row = 0; row < height; row++) {
        tr = document.createElement("tr");
    for (var cell = 0; cell < width; cell++) {
        td = document.createElement("td");
        tr.insertAdjacentElement("afterbegin",td)
    }
    table.insertAdjacentElement("afterbegin",tr)
  }
}

choice.addEventListener("click", function (event) {
    event.preventDefault();
});

choice.addEventListener("click", makeGrid);

table.addEventListener("click", function (event) {
    if (event.target.tagName === "TD") {
        var colval = document.querySelector("#colorPicker").value;
        event.target.style.backgroundColor = colval;
  }
});
