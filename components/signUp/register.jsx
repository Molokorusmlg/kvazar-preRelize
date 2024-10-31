import { useState } from "react";
import "./css/signUp.css";
import { Link } from "react-router-dom";

function Register() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [prof, setProf] = useState("");

  const PostUser = () => {
    fetch("http://127.0.0.1:8000/api/users/auth/users/", {
      method: "POST",
      headers: {
        token: "idikapodalse",
      },
      body: JSON.stringify({
        number: number,
        password: password,
        profession: prof || "Bim",
      }),
    });
  };

  const Numberchange = (event) => {
    setNumber(event.target.value);
  };

  const Passwordchange = (event) => {
    setPassword(event.target.value);
  };

  const Profchange = (event) => {
    setProf(event.target.value);
  };

  return (
    <div className="main">
      <div className="main__signin">
        <div className="main__accountbuttons">
          <div className="main__accountbuttons-signup">
            <Link to="/signUp" className="main__accountbutton ">
              Вход
            </Link>
            <hr className="isSelectedSecond" />
          </div>
          <div className="main__accountbuttons-signin">
            <Link to="/register" className="main__accountbutton main__select">
              Регистрация
            </Link>
            <hr className="isSelectedFirst" />
          </div>
        </div>
        <div className="main__form">
          <p className="main__form__number-Text">
            Введите номер телефона, который хотите использовать для входа на
            платформу <br /> На него будет отправлено SMS с кодом доступа:
          </p>
          <form action="">
            <input
              className="main__form-input"
              type="number"
              name="input1"
              placeholder="+79961800116"
              onChange={Numberchange}
            />
            <input
              className="main__form-input"
              type="password"
              name="input2"
              placeholder="Пароль"
              onChange={Passwordchange}
            />
            <label htmlFor="profesion">Выбор направления: </label>
            <select
              name="input3"
              className="main__form-select"
              id="profesion"
              value={"Bim"}
              onChange={Profchange}
            >
              <option value="Bim">Bim</option>
              <option value="Python">Python</option>
              <option value="1C">1C</option>
            </select>
          </form>
          <button className="main__button" onClick={PostUser}>
            <p>Отправить код</p>
          </button>
          <p className="main__politic-text">
            При нажатии на кнопку(и) вы соглашаетесь с
          </p>
          <a className="main__politic-link" href="#">
            политикой конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
}
export default Register;
