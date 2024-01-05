import "./user.css";


export default function User({user}) {
  return (
    <li className="userContainer">
       
       <img src={user.profilePicture} alt="" className="userImg" />
       <span className="userText">{user.username}</span>
       
    </li>
   
  )
}
