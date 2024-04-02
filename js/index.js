const gradeForm = document.querySelector("#grade");

gradeForm.addEventListener("submit", () => {
  const marksInput = document.querySelector("#marks");
  event.preventDefault();
  let number = Number(marksInput.value);
  gradeCalculator(number);
});

function gradeCalculator(score) {
  const output = document.querySelector("#score");
  if (score >= 80) {
    output.innerText = "Your Grade is A";
  } else if (score >= 70 && score < 80) {
    output.innerText = "Your Grade is B";
  } else if (score >= 60 && score < 70) {
    output.innerText = "Your Grade is C";
  } else if (score >= 50 && score < 60) {
    output.innerText = "Your Grade is D";
  } else if (score < 50) {
    output.innerText = "Your Grade is E";
  }
}
