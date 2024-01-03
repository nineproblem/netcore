import "./share.css";
import * as Icons from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/3.jpg" alt="" />
          <input
            type="text"
            placeholder="What's in your mind"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <Icons.PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText"> Photo or Video</span>
            </div>
            <div className="shareOption">
              <Icons.Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText"> Tag</span>
            </div>
            <div className="shareOption">
              <Icons.Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText"> Location</span>
            </div>
            <div className="shareOption">
              <Icons.EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText"> Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
