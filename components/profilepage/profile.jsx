import "./css/profie.css";
import test from "../../assets/profile/test.svg";

function Profile() {
  return (
    <div className="cardSpace">
      <div className="profile">
        <div className="profile__title">
          <h1 className="profile__title-text">Мой Профиль</h1>
        </div>
        <hr className="profile__line" />
        <div className="profile__persondata">
          <div className="profile__persondata_imgblock">
            <img
              src={test}
              alt="profile Photo"
              className="profile__persondata_imgblock_photo"
            />
          </div>
          <div className="profile__persondata_datablock">
            <h1 className="profile__persondata-title">Персональные данные</h1>
            <input
              type="text"
              className="profile__persondata_datablock_input"
              placeholder="Фамилия*"
            />
            <input
              type="text"
              className="profile__persondata_datablock_input"
              placeholder="Имя*"
            />
            <input
              type="text"
              className="profile__persondata_datablock_input"
              placeholder="Отчество*"
            />
          </div>
        </div>
        <div className="profile__personseconddata">
          <div className="profile__personseconddata_radio">
            <label className="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
            {/* <label className="profile__personseconddata_radio-buttonn">
              <input type="checkbox" />
            </label> */}
          </div>
          <div className="profile__personseconddata-bithday">
            <input
              type="date"
              placeholder="Дата рождения*"
              className="profile__personseconddata-bithday-input"
            />
          </div>
        </div>
        <div className="profile__person-therd-data">
          <div className="profile__person-therd-data__firstrow">
            <input
              type="number"
              className="profile__person-therd-data__firstrow-input"
              placeholder="Номер телефона*"
            />
            <input
              type="email"
              className="profile__person-therd-data__firstrow-input"
              placeholder="E-mail*"
            />
          </div>
          <div className="profile__person-therd-data__secondrow">
            <select
              name=""
              id=""
              className="profile__person-therd-data__secondrow-select"
            >
              <option value="bim">Bim проектирование</option>
              <option value="python">Програмироание на Python</option>
            </select>
          </div>
        </div>
        <h1 className="profile__location_title">Место рождения</h1>
        <div className="profile__location__firstrow">
          <input
            type="text"
            className="profile__person-therd-data__firstrow-input"
            placeholder="Страна*"
          />
          <input
            type="text"
            className="profile__person-therd-data__firstrow-input"
            placeholder="Регион*"
          />
        </div>
        <div className="profile__location__secondrow">
          <input
            type="text"
            className="profile__person-therd-data__firstrow-input"
            placeholder="Населенный пункт*"
          />
        </div>
        <div className="button__save_block">
          <a className="button__save" href="http://localhost:3000/courses/main">
            Сохранить
          </a>
        </div>
      </div>
    </div>
  );
}
export default Profile;
