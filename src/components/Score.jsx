import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";

export default function Score(props) {
  return (
    <div className="mb-3">
      <div className="icon d-flex justify-content-center align-items-center">
        <img src={star1} className="img-fluid me-2" width="25" /> 
        <div className="me-2">Highest Score:</div>
        {props.highestScore < 10 && <>&nbsp;</>}
        {props.highestScore}  
      </div>
      <div className="icon d-flex justify-content-center align-items-center">
        <img src={star2} className="img-fluid me-2" width="25" />
        <div className="me-2">Current Score:</div>
        {props.currentScore < 10 && <>&nbsp;</>}
        {props.currentScore}
      </div>
    </div>
  )
}
