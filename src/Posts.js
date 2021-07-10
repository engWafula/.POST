import React, { forwardRef } from 'react';
import './Posts.css'
import {Avatar} from "@material-ui/core"
import { ThumbUpAltOutlined } from '@material-ui/icons'
import { ChatOutlined, SendOutlined,ShareOutlined} from '@material-ui/icons'
import InputOptions from   './InputOptions'
import {useCollection}  from  'react-firebase-hooks/firestore'
import {db } from  './firebase'
import Feed from  './Feed'

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
    // const [posts]=useCollection(db.collection("posts").orderBy("timeStamp" ,"desc"));
    return (
        <div ref={ref}   className='posts'>
            <div className="post_header">
                 <Avatar src={photoUrl}></Avatar>
                 <div className="post_info">
                     <h2>{name}</h2>
                     <p>{description}</p>
                 </div>
            </div>
            <div className="post_body">
                  <p>{message}</p>
            </div>
            <div className="post_buttons">
               <InputOptions Icon={ThumbUpAltOutlined} color="gray" title="like"/>
               {/* <InputOptions Icon={ChatOutlined} color="gray" title="comment"/> */}
               <InputOptions Icon={SendOutlined} color="gray" title="send"/>
               <InputOptions Icon={ShareOutlined} color="gray" title="share"/>
            </div>
        </div>
        
    )
})
export default Posts

