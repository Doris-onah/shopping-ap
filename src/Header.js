import React from "react";
import { Link } from 'react-router-dom';
import NikeL from "../src/images/NikeL.jpeg"
import hamburger from "../src/images/icon-hamburger.svg"
import close from "../src/images/icon-close.svg"
import "./Header.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {GoogleButton} from "react-google-button";
import {auth,provider,signInWithRedirect,getRedirectResult,onAuthStateChanged,signOut} from "./ConfigIndex"


export default function Header() {
  const [menu, setMenu] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});
  
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        console.log("sign in");
       await signInWithRedirect(auth, provider)
       setIsAuth(true);
      
    };

    const handleSignOut = (e) => {
      e.preventDefault();
     signOut(auth)
     .then(() => {
      alert("sign out");
      navigate("/");
      setIsAuth(false);
     
  
    })
    .catch((error) => {
     
    });}

    useEffect(() => {
        async function getRedirect() {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    console.log(result.user);
                    setIsAuth(true);
                    
                }
            }
            catch (error) {
                console.log(error);
            }
    }
    getRedirect();
    }, [] )

    useEffect(() => {
        onAuthStateChanged(auth, 
            (user) => {
if (user) {
    console.log("user is signed in");
    setUser({...user});
    navigate("/");
   
}
 },
        (error) => {
            console.log(error);
        }

        );
},[])
 
 const handle = (e) => {
    setMenu(!menu);
    e.preventDefault();
  }
    return (
        <div className="header">
       <div className="header-con">
            <div className="header__left">
                <img src={NikeL} alt="logo" className="logo" width="65px" height="40px" title="logo"/>
                </div>
<div className="nav-con">
<div className="nav" >
                <div onClick={handle}>{menu ? 
               
      <img src={hamburger}  alt="iconmenu" className="menu-icon" title="iconmenu" width="32px" height="31px"/> :
      <img src={close} alt="iconmenu" className="menu-icon " title="iconmenu" width="32px" height="31"/> }
       </div>
       <ul className={menu ?  "" :"nav-active"  }>
      <li>  <Link to="/" onClick={() => setMenu(!menu)}>Men</Link></li>
      
      <li><Link to="Heels" className="link" onClick={()=> setMenu(!menu)}> Women </Link> </li>

      <li > <Link to="errorpage" onClick={() => setMenu(!menu)}>About</Link> </li>
      <li > <Link to="contact" onClick={() => setMenu(!menu)}>Contact</Link></li>
      <li> 
           {isAuth?
    
     <button className="btn" onClick={handleSignOut}>Sign Out</button>:
       <button className="btn" onClick={handleSignIn}>Sign Up</button>

       }</li> 
       </ul>
       
     </div>
     <div className="user">
   
     {isAuth? 
        <div >
        <img src={user.photoURL} alt="user" className="userimg"
         width="50px" height="40px" title="user"/>
         
          </div>: null}
          </div>
        </div>
        </div>
        </div>
    );
    }
