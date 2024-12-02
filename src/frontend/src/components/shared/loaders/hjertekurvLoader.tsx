import "./hjertekurvLoader.scss";

export default function HjertekurvLoader() {
  return (
    <div className="loader-container">
      <div className="heart-left-container">
        <div className="heart-left"></div>
      </div>
      <div className="loader-6">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
      <div className="heart-right-container">
        <div className="heart-right"></div>
      </div>
    </div>
  );
}
