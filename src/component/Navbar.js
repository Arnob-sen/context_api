import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
class Navbar extends React.Component
{
    static contextType=ThemeContext;
    render(){
        const {isDarkTheme,darkTheme,lightTheme}=this.context;
        const Theme=isDarkTheme ? darkTheme : lightTheme;
        return(
            <nav style={{background:Theme.background,color:Theme.Text,height:'140px'}}>
                <h2 style={{textAlign:'center'}}>my academy</h2>
                <div className="ui five button" >
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
}
export default Navbar;