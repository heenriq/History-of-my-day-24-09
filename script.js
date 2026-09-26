const botõesNum = document.getElementById("divNums");
let aparente = document.getElementById("display");
let display = "";
let num1 = "";
let num2 = "";
let op = 91;
const operadores = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "X": (a, b) => a * b,
  "/": (a, b) => a / b,
};

botõesNum.addEventListener("click", function (event) {
  if (event.target.closest("[data-type]")) {
    let btnClicado = event.target.closest("[data-type]");

    if (btnClicado.dataset.type === "num" && !Number.isFinite(num1)) {
      display = display + btnClicado.textContent;
      num1 = display;
      console.log(display);
      aparente.textContent = display;
    } else if (btnClicado.dataset.type === "op") {
      if (Number.isFinite(op)) {
        op = btnClicado.textContent;
      } else {
        alert("Operação já escolhida.");
        return;
      }

      num1 = parseInt(display);

      if (!Number.isFinite(num1)) {
        alert("Coloque o primeiro número brother.");
        display = "";
        op = 91;
        return;
      }

      display = "";
    } else if (btnClicado.dataset.type === "num" && Number.isFinite(num1)) {
      display = display + btnClicado.textContent;
      num2 = display;

      console.log(display);
      aparente.textContent = display;
    } else if (btnClicado.dataset.type === "calc" && Number.isFinite(num1)) {
      num2 = parseInt(display);
      if (!Number.isFinite(num2)) {
        alert("Coloque o segundo número brother.");
        display = "";
        return;
      }
      aparente.textContent = operadores[op](num1, num2)
      display = ""
      num1 = ""
      num2 = ""
      op = 91

    }
  } else {
    return;
  }
});
