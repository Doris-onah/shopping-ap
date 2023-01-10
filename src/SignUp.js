// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {GoogleButton} from "react-google-button";
// import {auth,provider,signInWithRedirect,getRedirectResult,onAuthStateChanged,signOut} from "./ConfigIndex"
// export default function SignUp() {
//     const [isAuth, setIsAuth] = React.useState(false);

//     const navigate = useNavigate();
//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         console.log("sign in");
//        await signInWithRedirect(auth, provider)
//     };
//     useEffect(() => {
//         async function getRedirect() {
//             try {
//                 const result = await getRedirectResult(auth);
//                 if (result) {
//                     console.log(result.user);
//                     setIsAuth(true);
                    
//                 }
//             }
//             catch (error) {
//                 console.log(error);
//             }
//     }
//     getRedirect();
//     }, [] )

//     useEffect(() => {
//         onAuthStateChanged(auth, 
//             (user) => {
// if (user) {
//     console.log("user is signed in");
//     navigate("/");
   
// }
//  },
//         (error) => {
//             console.log(error);
//         }

//         );
// },[])
    

//     return (
//         <div className="signin">
//         <h1>SignUp</h1>
//         <GoogleButton onClick={handleSignIn}/>
//         </div>
       
//     );
//     }