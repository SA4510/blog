
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                    src="https://www.globaledit.com/wp-content/uploads/2020/02/New-Workflow-Solution-1.jpg"
                    alt=""/>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>    

                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Sachin"/>
                <label>Email</label>
                <input type="email" placeholder="sasingh594@gmail.com"/>
                <label>Password</label>
                <input type="password" placeholder="*********"/>
                <button className="settingsSubmit">Update</button>


            </form>

        </div>
        <Sidebar/>

      
    </div>
  )
}

export default Settings


