import profile from "../../assets/header_img/profile.svg";
import miniArrow from "../../assets/header_img/mini-arrow.svg";
import exitButtonArrow from "../../assets/header_img/exitButton.svg";
import "./css/burger.css";

export const Burger = ({ isOpenedModalUser }) => {
  const classBurger = isOpenedModalUser ? "burger-on" : "burger-off";
  return (
    <div className={`burgermain ${classBurger}`}>
      <div className="burgermain__dataProfile">
        <div className="burgermain__dataProfile_imgBlock">
          <img
            src={profile}
            alt="profile-img"
            className="burgermain__dataProfile_imgBlock-img"
          />
        </div>
        <div className="burgermain__dataProfile_nameBlock">
          <a
            href="http://localhost:3000/profile"
            className="burgermain__dataProfile_nameBlock-text"
          >
            Дмитрий Якорнов
          </a>
        </div>
        <div className="burgermain__dataProfile_arrowBlock">
          <img
            src={miniArrow}
            alt=""
            className="burgermain__dataProfile_arrowBlock-img"
          />
        </div>
      </div>
      <hr />
      <div className="burgermain__ExitButton">
        <a
          href="http://localhost:3000/signUp"
          className="burgermain__ExitButton-button"
        >
          <img
            src={exitButtonArrow}
            alt="img"
            className="burgermain__ExitButton-button-img"
          />
          <p className="burgermain__ExitButton-button-text">выйти</p>
        </a>
      </div>
    </div>
  );
};
