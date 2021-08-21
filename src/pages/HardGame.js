import createCards from "../utils/createCards";
import startGame from "../utils/startGame";

const NUM_CARDS = 20;

const HardGame = () => {
  const $root = document.querySelector("html");
  $root.setAttribute("data-difficulty", "hard");

  const view = `
    <section class="memory-game">${createCards(NUM_CARDS)}</section>
    <section class='actions'>
      <button id='play' class="btn-action">Play</button>
      <a href="#" id="back-button" class="btn-action">Back</a>
    </section>
  `;

  setTimeout(() => {
    const $playBtn = document.querySelector("#play");
    $playBtn.addEventListener("click", () => startGame(NUM_CARDS));
  }, 0);

  return view;
};

export default HardGame;
