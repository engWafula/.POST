import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/counter/userSlice';
import  SideBar from  './SideBar'
import MenuIcon from   "@material-ui/icons/Menu"
import HomeIcon from    "@material-ui/icons/Home"
import ChatIcon from    "@material-ui/icons/Chat"
import {Avatar} from "@material-ui/core"
import { useHistory } from 'react-router';
import NotificationsIcon from    "@material-ui/icons/Notifications"
//import BusinessCenterIcon from    "@material-ui/icons/BusinessCenter "
// import SupervisorAccountIcon from    "@material-ui/icons/SupervisorAccount "
function Header() {
    const dispatch = useDispatch();
    const history=useHistory()

    const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
    }
  
    return (
        <div className="header">
            <h1></h1>
            <div className="header_left">
            {/* <MenuIcon /> */}
            <img className="img" src="logo.jpg" alt=""/>
            </div>

             <div className="header_input">
             <SearchIcon  className="header_search"/>
             <input placeholder="search " type="text "/>
            
             </div>
            
         <div className="header_right">
           < HomeIcon  className="header_icon"/>
            <NotificationsIcon  className="header_icon" />
          
            
            
             <button type="submit" onClick={logoutOfApp} class="btn btn-primary">LogOut</button>
        </div> 
        </div>
          
          
    
           
       
    )
}

export default Header
