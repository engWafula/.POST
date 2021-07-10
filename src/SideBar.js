import React from 'react'
import {Avatar} from "@material-ui/core"
import "./SideBar"
import  "./SideBar.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
function SideBar() {
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img  className="img1" src="you.jpg"/> 
                <Avatar className="avatar" src={user.photoUrl}>{user.email[0]}</Avatar>
                <h1>{user.displayName}</h1>
                <h4>{user.email}</h4>
            </div>
          

            <div className="stats">
                <div className="stat">
                    <p>Who viewed you</p>
                    <p className="statNum"> 1k</p>
                </div>
                <div className="stat">
                   <p>Views on posts</p>
                    <p className="statNum"> 1k</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>

            </div>
        </div>
    )
}

export default SideBar
