import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from   './features/counter/userSlice';
import { auth } from './firebase';
import './Login.css';
 import  Account from  './Account';
import { googleProvider } from './AuthMethod';
import { githubProvider } from './AuthMethod';
import SocialMedia from './SocialMedia';
// import  SimpleReactFooter from  './SimpleReactFooter';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [signIn,setsignIn]=useState(false)
    const dispatch = useDispatch();


    const loginToApp = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(userAuth => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileUrl: userAuth.user.photoURL,
            }))
          })
          .catch(error => alert(error));
      };

    // const register = () => {
    //     if (!name) {
    //       return alert("Please enter a full name");
    //     };
    
    //     auth.createUserWithEmailAndPassword(email, password)
    //       .then(userAuth => {
    //         userAuth.user.updateProfile({
    //           displayName: name,
    //           photoURL: profilePic,
    //         })
    //         .then(() => {
    //           dispatch(login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: name,
    //             photoURL: profilePic,
    //           }))
    //         })
    //       }).catch(error => alert(error));
    //   };
    const handleClick= async (provider)=>{
             const res=await SocialMedia(provider)
    }
    
    return (
        <div className="login">
              <h1>signIn</h1>
             {signIn? <Account/>
                :(
                  <>
            <form>
                
                {/* <input className="form-control" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                 placeholder='Full Name(required if registering)'/>
            
              <input className="form-control" 
                 type="text"
                 value={profilePic}
                 onChange={e => setProfilePic(e.target.value)}
                 placeholder='Profile picture url(optional)'/> */}
              
                <input className="form-control" 
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder='Email'/>

                <input  className="form-control" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'/>

                <button 
                type="submit" onClick={loginToApp}
                className="btn btn-primary">Sign In</button>

            </form>
            <p>Not a Member?{" "}<span className='Register' onClick={()=>setsignIn(true)}>Create Account</span></p>
            <p>Sign In with  <span onClick={()=>handleClick(googleProvider)}
            className='socialMedia'
            >Google</span></p>
            </> )}
            
        
           </div>
           
        
          
     )   
}

export default Login
