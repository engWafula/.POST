import React, { useEffect } from 'react';
import './App.css';
import Header  from  "./Header"
 import SideBar from "./SideBar"
import Feed from  "./Feed"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from  './features/counter/userSlice';
import { auth } from './firebase';
import   Login  from  "./Login"
import Account from   "./Account"
import Footer from "./Footer";
// import  SimpleReactFooter from  "./SimpleReactFooter"
import {
  Switch,Route,
BrowserRouter as Router   } from  'react-router-dom';
function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);
  return (
    <div className=" app">

     
    
     { !user? (<Login/>)||<Account/>: ( 
     <div className="  app_body">
     {/* <SideBar/>   */}
     
     <Header/>
     <Feed/>
     
     
 </div>)}
 <Footer />
</div>
       
  );
}

export default App;
