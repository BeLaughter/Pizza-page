import "../App.css";
function Bodypages(props) {
  return (
    <div className="bodypages image-text-container">
      <img
        src="https://cdn.pixabay.com/photo/2022/06/04/03/41/pizza-7241179_640.jpg"
        alt="pic"
        className=" w-100  pages-img"
      ></img>
      <div className="boxb"></div>
      <div className="text-overlay">
        <h1 className="title">{props.h1}</h1>
      </div>
    </div>
  );
}

export default Bodypages;
