import CloseFriend from "../closefriend/CloseFriend";
import "./sidebar.css"
import * as Icons from "@mui/icons-material";
import {Users} from "../../dummyData";
import User from "../user/User";

export default function Sidebar(){
   const userFilter = Users.filter ((u)=> u.id == 3);
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                {userFilter.map((u)=>(
                    <User key={u.id} user={u}/>
                   ))} 
                    <li className="sidebarListItem">
                       <Icons.RssFeed className="sidebarIcon"/>
                       <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.Chat className="sidebarIcon"/>
                       <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.PlayCircleRounded className="sidebarIcon"/>
                       <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.Group className="sidebarIcon"/>
                       <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.Bookmarks className="sidebarIcon"/>
                       <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.HelpOutline className="sidebarIcon"/>
                       <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.WorkOutline className="sidebarIcon"/>
                       <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.Event className="sidebarIcon"/>
                       <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                       <Icons.School className="sidebarIcon"/>
                       <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                   {Users.map((u)=>(
                    <CloseFriend key={u.id} user={u}/>
                   ))}
                </ul>
            </div>
        </div>
    )
}