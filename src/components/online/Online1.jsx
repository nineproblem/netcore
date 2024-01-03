import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="righbarUsername">{user.username}</span>
    </li>
  )
}