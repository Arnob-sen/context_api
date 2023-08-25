import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AuthContext } from "../Context/AuthContext";
class Navbar extends React.Component
{
  
    render(){
        
        return(
            <AuthContext.Consumer>
                {(AuthContext)=>{
                    return(
                        <ThemeContext.Consumer>
            {(ThemeContext)=>{
                const {isDarkTheme,darkTheme,lightTheme}=ThemeContext;
                const {isLoggedIn,changeAuthStatus}=AuthContext;
                const Theme=isDarkTheme ? darkTheme : lightTheme;
                return(
                 <nav style={{background:Theme.background,color:Theme.Text,height:'140px'}}>
              <h2 style={{textAlign:'center'}}>my academy</h2>
              <p onClick={changeAuthStatus} style={{textAlign:'center'}}>{isLoggedIn?'logged in':'logged out' }</p>
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
            }}

            </ThemeContext.Consumer>
          

                    )
                }}
            </AuthContext.Consumer>
            
        )
    }
}
export default Navbar;