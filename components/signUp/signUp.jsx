import "./css/signUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [prof, setProf] = useState("");

  const PostUser = () => {
    let a = fetch("http://127.0.0.1:8000/api/users/auth/token/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "+79867119714",
        password: "lolololol",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          <div className="main__accountbuttons-signin">
            <Link to="/signUp" className="main__accountbutton main__select">
              Вход
            </Link>
            <hr className="isSelectedFirst" />
          </div>
          <div className="main__accountbuttons-signup">
            <Link to="/register" className="main__accountbutton">
              Регистрация
            </Link>
            <hr className="isSelectedSecond" />
          </div>
        </div>
        <div className="main__form">
          <form action="">
            <input
              className="main__form-input"
              type="tel"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]"
              required
              placeholder="+79961800116"
            />
            <input
              className="main__form-input"
              type="password"
              placeholder="Пароль"
            />
          </form>
          <div className="main__supportbuttons">
            <form className="main__supportbuttons-form" action="">
              <input type="checkbox" id="radioSave" />
              <label htmlFor="radioSave">Запомнить меня</label>
            </form>
            <a
              className="main__supportbuttons-changepassword"
              onClick={PostUser}
              href="#"
            >
              Забыли пароль?
            </a>
          </div>
          <a href="http://localhost:3000/programs/main">
            <button className="main__button">
              <p>Войти</p>
            </button>
          </a>
        </div>
        <hr className="LinebetweenFooter" />
      </div>
    </div>
  );
}
export default Signup;
