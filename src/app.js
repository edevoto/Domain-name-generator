/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let hacks = [".com", ".net", ".cl", ".org"];

let randomNumber = max => Math.floor(Math.random() * max);

const getRandom = (pron, adj, noun, hacks) => {
  return `${pron[randomNumber(pron.length)]}${adj[randomNumber(adj.length)]}${
    noun[randomNumber(noun.length)]
  }${hacks[randomNumber(hacks.length)]}`;
};
let randomName = document.querySelector("#randomName");

const showRandom = () => {
  randomName.innerHTML = getRandom(pronoun, adj, noun, hacks);
};

const boton = document
  .querySelector("#hitMe")
  .addEventListener("click", showRandom);
