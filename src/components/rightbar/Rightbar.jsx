import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online1";


export default function Rightbar({profile}){
    const HomeRightbar = () => {
        return (
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.jpg" alt="" />
                    <span className="birthdayText"> <b>Mg kaung </b>and <b>2 other friend have a birthday</b></span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {Users.map((u)=>(
                    <Online key={u.id} user={u}/>
                   ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">Some Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey"> City :</span>
                    <span className="rightbarInfoValue">Yangon</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey"> From :</span>
                    <span className="rightbarInfoValue">Sagainag</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey"> Relationalship :</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friend</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.png" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/2.png" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/3.png" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mao Mao</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}