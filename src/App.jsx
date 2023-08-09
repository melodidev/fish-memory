import { useEffect, useState } from "react"
import "./App.css"
import data from "./data.js"
import Card from "./components/Card"
import Score from "./components/Score"
import GameOver from "./components/GameOver"

export default function App() {
  let [cards, setCards] = useState(data);
  let [selectedCards, setSelectedCards] = useState([]);
  let [highestScore, setHighestScore] = useState(0);
  let [isGameOver, setIsGameOver] = useState(false);

  let currentScore = selectedCards.length;
  let maxScore = cards.length;

  // Shuffle the cards when the page is loaded
  useEffect(shuffle, []);

  // Update highest score, depending on the current score
  useEffect(() => {
    if (currentScore > highestScore) setHighestScore(currentScore);
  }, [currentScore]);

  function shuffle() {
    setCards(cards => {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
      return [...cards];
    });
  }

  function selectCard(id) {
    if (selectedCards.includes(id)) return gameOver();
    setSelectedCards([...selectedCards, id]);
    // Finish the game if current score reaches maximum
    if (currentScore + 1 == maxScore) return gameOver();
    shuffle();
  }

  function gameOver() {
    setIsGameOver(true);
  }

  function playAgain() {
    setSelectedCards([]);
    setIsGameOver(false);
  }

  return (
    <div className="container mt-lg-5 mt-3">
      <div className="text-center display-3">Fish Memory Game</div>

      {!isGameOver ? (
        <div>
          <div className="text-center lh-1 mb-4">
            Click all the fishes, but do not click the same fish more than once!
          </div>
          <div className="row mx-lg-5 mx-1">
            {cards.map(card => (
              <div key={card.id} className="col-lg-2 col-6">
                <Card {...card} handleClick={() => selectCard(card.id)} />
              </div>
            ))}
          </div>
          <Score currentScore={currentScore} highestScore={highestScore} />
        </div>
      ) : (
        <GameOver currentScore={currentScore} playAgain={playAgain} maxScore={maxScore} />
      )}
    </div>
  )
}
