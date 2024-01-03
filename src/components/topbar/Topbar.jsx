import "./topbar.css";
import * as Icons from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Net Core</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Icons.Search className="searchIcon"/>
          <input placeholder="SEARCH" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Icons.Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Icons.Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Icons.Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="\assets\person\2.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
