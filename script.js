var wrapper = document.querySelector(".wrapper");
var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");

function prompts() {
  var number1 = Number(
    prompt("What is the estimated number of driving miles used per year?")
  );
  var number2 = Number(
    prompt("What is the current cost of a gallon of gasoline in your area?")
  );

  resultEle.innerHTML = Calculate(number1, number2, 12, ".result1");
  resultEle.innerHTML = Calculate(number1, number2, 17, ".result2");
  resultEle.innerHTML = Calculate(number1, number2, 26, ".result3");
  resultEle.innerHTML = Calculate(number1, number2, 29, ".result4");
}

function Calculate (nm1, nm2, rating, result1) {
  var result1 = (nm1 / rating) * nm2;
  var result1 = document.write(
    "To drive a car with a MPG rating of " +
      rating +
      " for " +
      nm1 +
      " miles at $" +
      nm2 +
      " per gallon it would cost " +
      "$" +
      result1 +
      "<br>"
  );
}

prompts();

submitEle.addEventListener("click", function () {
  prompts();
});