import { Card } from "../prog_card/card.jsx";
import "./css/mainPrograms.css";
import { HOME_CARD } from "../../mock/mock.js";

function MainPrograms() {
  return (
    <div className="content">
      <div className="content__title">
        <h1 className="title_cards">Выберите программу:</h1>
      </div>
      <div className="content__cards">
        {HOME_CARD.map((card) => {
          return <Card {...card} />;
        })}
      </div>
    </div>
  );
}

export default MainPrograms;
