import "./css/videoCard.css";
export const CardVideo = ({ file, name, description }) => {
  return (
    <a className="video__card">
      <img
        className="video__card__img"
        src={`http://127.0.0.1:8000${file}`}
        alt="video-img"
      />
      <div className="video__card-text">
        <p className="video__card-title">{name}</p>
        <p className="video__card-paragraph">{description}</p>
      </div>
    </a>
  );
};
