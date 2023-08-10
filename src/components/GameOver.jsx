import trophy from "../assets/trophy.png";

export default function GameOver(props) {
  return (
    <div>
      {props.currentScore == props.maxScore ? (
        <div className="d-flex flex-column align-items-center mt-5">
          <img src={trophy} />
          <div className="text-warning display-4">Congratulations!</div>
          <div className="fs-2">You won the game.</div>
        </div>
      ) : (
        <div>
          <div className="text-warning text-center display-1 mt-5">Game Over!</div>
          <div className="text-center fs-2">Your score is {props.currentScore}.</div>
        </div>
      )}

      <div className="d-flex justify-content-center">
        <button onClick={props.playAgain} type="button" className="btn btn-outline-warning fs-5 mt-4">
          Play Again
        </button>
      </div>
    </div>
  )
}
