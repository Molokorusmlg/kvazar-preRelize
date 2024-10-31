import "./css/card.css";
export const Card = ({ img, title, description }) => {
  return (
    <a className="main__card">
      <div className="main__card-firstrow">
        <img className="card__img" src={img} alt="autocad icon" />
        <p className="card-title">{title}</p>
      </div>
      <div className="main__card-secondrow">
        <p className="card__text">{description}</p>
      </div>
    </a>
  );
};