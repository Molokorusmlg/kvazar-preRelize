import "./css/player.css";
import vid from "../../assets/videi/idiNaxui.mp4";

function Player() {
  return (
    <div className="space">
      <div className="player">
        <video className="player__video" src={vid} controls></video>
        <div className="player__text">
          <h3 className="player__text-title">Video</h3>
          <p className="player__text-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            quidem?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Player;
