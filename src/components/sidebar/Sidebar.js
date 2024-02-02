import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img
        src="https://th.bing.com/th/id/OIP.Q2xXTo9hPdjyu4md1pzOogHaLH?pid=ImgDet&w=120.09375&h=180&c=7&dpr=1.3"
            alt=""
            />
            <p>
            Lorem rdftu fdrtf trdtyjb hyg bygu.yguh uhuiji 8jj dktjy
            tfthbj jgyghu ,uh8u uy7uikjnjhbyu uhijknj,yfy tdr6fguijij
            nrgtrjyo knig ihtit ihtiroj ijrjg kntih kehrith kertihr.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
              <li className="sidebarListItem">Sports</li>
          </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>

       
    </div>
  )
}

export default Sidebar
