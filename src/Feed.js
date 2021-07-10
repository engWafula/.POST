import React ,{useState,useEffect,useRef} from 'react'
import "./Feed.css"
import Posts from   './Posts'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay'
import EventNoteIcon from '@material-ui/icons/EventNote'
import InputOptions from   './InputOptions'
import {db ,storage}from  './firebase'
import firebase from  'firebase'
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        )))
      ))
    }, [])
    
    const sendPost = e => {
      e.preventDefault();
  
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    };
    return (
        <div className="feed">
            <div className="feed_container">
             <div className="feed_input">
                 <CreateIcon/>
                 <form>
                     <input type="text"   
                    //   ref={inputRef}    
                     value={input}
                     onChange={e=>setInput(e.target.value)}
                     className="input"/>
                     <button type="submit" onClick={sendPost} className="feedButton">send</button>
                 </form>

               
                 
             </div>
             <div  className="inputOptions" >
                 <div 
                //  onClick={()=>filepickerRef.current.click()}
                 >
             <InputOptions title="photo" Icon={ImageIcon} color="lightblue"/>
                 {/* <input type="file" hidden onChange={addImageToPost}  ref={filepickerRef}/> */}
                 </div>
              <InputOptions title="videos" Icon={SubscriptionsIcon} color="orange"/>
               <InputOptions title="videos" Icon={EventNoteIcon} color="gray"/> 
              {/* <InputOptions title="write article" Icon={CalendarViewDayIcon} color="gray"/> */}
             </div>
            </div>
            
            <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl,timestamp}}) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        ))}
      </FlipMove>
        </div>
    )
}

export default Feed
