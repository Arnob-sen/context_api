import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
class Todolist extends React.Component
{
    static contextType=ThemeContext;
    

    render()
    {
        const {isDarkTheme,darkTheme,lightTheme,changeTheme}=this.context;
        const Theme=isDarkTheme ? darkTheme :lightTheme;
        
        return(
            <div style={{background:Theme.background,color:Theme.Text,height:'140px',textAlign:'center'}}>
                <p class="item">plan the family trip</p>
                <p class="item">go for shopping for dinner</p>
                <p class="item"> go for a walk</p>

                <button className=" ui button primary" onClick={changeTheme}>change Theme</button>


            </div>
        )
    }
}
export default Todolist;
