import { COURSES__CARD } from "../../mock/mock";
import searchICO from "../../assets/header_img/searchIcon.svg";
import { CardVideo } from "../videoCards/videoCard";
import "./css/courses.css";
import { useEffect, useState } from "react";

function CoursesMeny() {
  const [list, setList] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getAllVideo = () => {
    fetch("http://127.0.0.1:8000/api/videos/full_videos/", {
      method: "GET",
      headers: {
        Authorization: "Token f949e89c2a2f6c174c33e66b20beb65721373595",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      })
      .finally(() => {
        console.log(123);
      });
  };

  useEffect(() => {
    getAllVideo();
  }, []);

  const searchVideo = () => {
    const LowerSearchString = searchString.toLowerCase();
    const result = list.filter((letter) =>
      letter.name.toLowerCase().includes(LowerSearchString)
    );

    return result;
  };

  return (
    <div className="courses">
      <div className="courses__search-box">
        <div className="courses__search-box-search">
          <div className="courses__search-box-search-img">
            <img
              className="courses__search-box-search-svg"
              src={searchICO}
              alt="иконка поиска"
            />
          </div>
          <input
            className="courses__search-input"
            type="text"
            placeholder="Поиск"
            onChange={(event) => setSearchString(event.target.value)}
          />
        </div>
      </div>
      <div className="courses__block">
        <div className="courses__cards">
          {searchVideo().map((card_video) => {
            return <CardVideo {...card_video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesMeny;
