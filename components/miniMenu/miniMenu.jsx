import "./css/miniMenu.css";
import modal from "../../assets/header_img/modal.svg";

export const MiniMenu = ({ isOpenedModalButton }) => {
  const classModal = isOpenedModalButton ? "modal-on" : "modal-off";
  return (
    <a className={`mini_menu ${classModal}`} href="https://auth.hr.alabuga.ru/">
      <div className="mini_menu__content">
        <div className="mini_menu__img_block">
          <img src={modal} alt="" className="mini_menu__img_block-img" />
        </div>
        <div className="mini_menu__text_block">
          <p className="mini_menu__text_block-text">HR-платформа</p>
        </div>
      </div>
    </a>
  );
};
