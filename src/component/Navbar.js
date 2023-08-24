import React from "react";
class Navbar extends React.Component
{
    render(){
        return(
            <nav>
                <h2 className="ui centered header">my academy</h2>
                <div className="ui three button">
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