import "./TopBar.css"
import { Link } from "react-router-dom";

function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
          < i className="topIcon fa-brands fa-facebook"></i> 
          <i className="topIcon fa-brands fa-x-twitter"></i>    
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
         <ul className="topList">
          <li className="topListItem">  <Link className="link" to="/">HOME</Link></li>
              <li className="topListItem"> <Link className="link" to="/">ABOUT</Link></li>
              <li className="topListItem"> <Link className="link"to="/">CONTACT</Link></li>
              <li className="topListItem"> <Link className="link"to="/write">WRITE</Link></li>

              <li className="topListItem">
                {user && "LOGOUT"}

              </li>
          </ul>

        </div>
         <div className="topRight">
           {
              user ? (
          
               <img 
                className="topImg"
                src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-happy-business-woman-closing-laptop-at-workplace-in-slow-motion-close-up-young-woman-finishing-work-on-computer-indoor-relaxed-girl-stretching-arms-after-working-day-in-office-at-evening_bfezo7odu_thumbnail-1080_01.png"

                alt=""/>

              ) : (
             <ul className="topList">
               <li className="topListItem">
                 <Link className="link" to="/login">LOGIN</Link>
               </li>
               <li className="toplistItem">
                  <Link className="link" to="/register">REGISTER</Link>
               </li>
             </ul>

             )
           }
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
         </div>
    </div>
  )
}

export default TopBar
