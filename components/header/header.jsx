import menu from "../../assets/header_img/meny.svg";
import logo from "../../assets/header_img/whiteALAbuga.png";
import ringBell from "../../assets/header_img/bell.svg";
import profile from "../../assets/header_img/profile.svg";
import arrowDown from "../../assets/header_img/arrow__frofile.svg";
import { HeaderLink } from "../headerLink/headerLink";
import { Burger } from "../burger/burger";
import { MiniMenu } from "../miniMenu/miniMenu";
import "./css/header.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const str = window.location.pathname;

  const [isOpenedModalUser, setIsOpenedModalUser] = useState(false);
  const [isOpenedModalButton, setIsOpenedModalButton] = useState(false);

  const classArrow = isOpenedModalUser ? "Arrow-on" : "Arrow-off";
  const classBlock = isOpenedModalUser ? "block-on" : "block-off";

  const changeOpenedModalUser = () => {
    setIsOpenedModalUser(!isOpenedModalUser);
  };

  const changeOpenedModalButton = () => {
    setIsOpenedModalButton(!isOpenedModalButton);
  };

  return (
    <div className="header">
      {str === "/courses/main" ||
      str === "/programs/main" ||
      str === "/profile" ||
      str === "/video" ? (
        <>
          <div className="header__menu">
            <img
              className="header__img-menu"
              src={menu}
              alt="meny"
              onClick={changeOpenedModalButton}
            />
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <MiniMenu isOpenedModalButton={isOpenedModalButton} />
          <Burger isOpenedModalUser={isOpenedModalUser}></Burger>
          <div className="header__links">
            {str === "/courses/main" ? (
              <>
                <HeaderLink
                  src={"/programs/main"}
                  line={"no-line"}
                  text="Программы"
                />
                <HeaderLink src={"/courses/main"} line={"line"} text="Курсы" />
              </>
            ) : (
              <>
                <HeaderLink
                  src={"/programs/main"}
                  line={"line"}
                  text="Программы"
                />
                <HeaderLink
                  src={"/courses/main"}
                  line={"no-line"}
                  text="Курсы"
                />
              </>
            )}
          </div>
          <div className="header__profile">
            <div
              className={`header__profileButtonBlock ${classBlock}`}
              onClick={changeOpenedModalUser}
            >
              <div className="header__profileImgBlock">
                <img src={profile} alt="profileLogo" />
              </div>

              <a className="profile__arrow" href="#">
                <img
                  src={arrowDown}
                  className={`arrowClick ${classArrow}`}
                  alt="arrowClick"
                />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__menu">
            <img className="header__img-menu" src={menu} alt="meny" />
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
