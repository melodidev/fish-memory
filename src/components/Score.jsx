export default function Score(props) {
  return (
    <div className="mb-3">
      <div className="icon d-flex justify-content-center align-items-center">
        <img src="../public/images/star1.png" className="img-fluid me-2" width="25" /> 
        <div className="me-2">Highest Score:</div>
        {props.highestScore < 10 && <>&nbsp;</>}
        {props.highestScore}  
      </div>
      <div className="icon d-flex justify-content-center align-items-center">
        <img src="../public/images/star2.png" className="img-fluid me-2" width="25" />
        <div className="me-2">Current Score:</div>
        {props.currentScore < 10 && <>&nbsp;</>}
        {props.currentScore}
      </div>
    </div>
  )
}
