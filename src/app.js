import { plus } from "./calculator.js";
import "./app.css";
import bg from "./bg.png";

const answerDiv = () => {
  const div = document.createElement("div");
  div.innerText = `2+3의 답은 ${plus(2,3).toString()}입니다.`
  return div;
}

const fetchBackground = () => {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve();
    }, 2000);
  })
}

document
.getElementById("answer")
.appendChild(
  answerDiv()
);

fetchBackground().then(() => {
  document.body.style.backgroundImage = `url(${bg})`;
})
