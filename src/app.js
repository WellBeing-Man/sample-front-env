import { plus } from "./calculator.js";
import "./app.css";
import bg from "./bg.png";

function answerDiv() {
  const div = document.createElement("div");
  div.innerText = `2+3의 답은 ${plus(2,3).toString()}입니다.`
  return div;
}

document
  .getElementById("answer")
  .appendChild(
    answerDiv()
  )

document.body.style.backgroundImage = `url(${bg})`;