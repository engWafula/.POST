import firebase from "./firebase";

const  SocialMedia =(provider)=>{
    return    firebase.auth().signInWithPopup(provider).then((res)=>{
            return res.user
        }).catch((error)=>{
            return error
        })
}
export default SocialMedia;








