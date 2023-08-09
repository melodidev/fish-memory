export default function Card(props) {
  return (
    <div
      onClick={props.handleClick}
      className="cursor-pointer d-flex flex-column align-items-center border border-2 bg-light bg-opacity-25 rounded mb-lg-4 mb-3"
    >
      <img src={`public/images/${props.img}`} className="img-fluid mt-3 mb-2" />
      <div className="text-light">{props.name}</div>
    </div>
  )
}
