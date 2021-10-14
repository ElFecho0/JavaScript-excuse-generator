/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function myFunction() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);
  let excusa =
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];

  console.log(excusa);

  document.getElementById("excuse").innerHTML = excusa;
}
document.getElementById("myBtn").addEventListener("click", myFunction);
