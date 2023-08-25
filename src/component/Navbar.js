import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
class Navbar extends React.Component
{
    static contextType=ThemeContext;
    render(){
        const {isDarkTheme,darkTheme,lightTheme}=this.context;
        const Theme=isDarkTheme ? darkTheme : lightTheme;
        return(
            <nav style={{background:Theme.background,color:Theme.Text,height:'120px'}}>
                <h2 style={{textAlign:'center'}}>my academy</h2>
                <div className="ui three button" style={{textAlign:'center'}}>
                    <button className="ui button">
                        overview
                    </button>
                    <button className="ui button">
                        support
                    </button>
                    <button className="ui button">
                        contact
                    </button>

                </div>
            </nav>
        )
    }
}
export default Navbar;