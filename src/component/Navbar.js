import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AuthContext } from "../Context/AuthContext";
// class Navbar extends React.Component
// {
    
    
//     render(){
        
        
//         return(
//             <AuthContext.Consumer>
//                 {(AuthContext)=>{
//                     return(
//                         <ThemeContext.Consumer>
//             {(ThemeContext)=>{
//                 const {isDarkTheme,darkTheme,lightTheme,changeTheme}=ThemeContext;
//                 const {isLoggedIn,changeAuthStatus}=AuthContext;
//                 const Theme=isDarkTheme ? darkTheme : lightTheme;
//                 return(
//                  <nav style={{background:Theme.background,color:Theme.Text,height:'140px'}}>
//               <h2 style={{textAlign:'center'}}>my academy</h2>
//               <button 
//                onClick={changeAuthStatus}  style={{textAlign:'center'}}>{isLoggedIn?'logged in':'logged out' }
//               </button>
//               <div className="ui five button" style={{textAlign:'center'}}>
//                  <div style={{textAlign:'center'}}>
//                 <button className="ui button">
//                     overview
//                 </button>
//                 <button className="ui button">
//                     support
//                 </button>
//                 <button className="ui button">
//                     contact
//                 </button>
//                 <button className="ui button">
//                     dolist1
//                 </button>
//                 <button className="ui button">
//                     dolist2
//                 </button>
//                 <button className="ui button">
//                     dolist3
//                 </button>
//                 </div>


//             </div>
//         </nav>

//                 )
//             }}

//             </ThemeContext.Consumer>
          

//                     )
//                 }}
//             </AuthContext.Consumer>
            
//         )
//     }
// }
const Navbar=()=>{
    const {isDarkTheme,darkTheme,lightTheme,changeTheme}=useContext(ThemeContext)
    const {isLoggedIn,changeAuthStatus}=useContext(AuthContext);
    const Theme=isDarkTheme ? darkTheme : lightTheme;
    return(
        <nav style={{background:Theme.background,color:Theme.Text,height:'140px'}}>
        <h2 style={{textAlign:'center'}}>my academy</h2>
        <button 
         onClick={changeAuthStatus}  style={{textAlign:'center'}}>{isLoggedIn?'logged in':'logged out' }
        </button>
        <div className="ui five button" style={{textAlign:'center'}}>
           <div style={{textAlign:'center'}}>
          <button className="ui button">
              overview
          </button>
          <button className="ui button">
              support
          </button>
          <button className="ui button">
              contact
          </button>
          <button className="ui button">
              dolist1
          </button>
          <button className="ui button">
              dolist2
          </button>
          <button className="ui button">
              dolist3
          </button>
          </div>


      </div>
  </nav>

    )    
}
export default Navbar;