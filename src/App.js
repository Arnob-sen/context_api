import React from "react";
import Navbar from "./component/Navbar";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
     <Navbar />
     <Todolist />
     </div>
    </div>
  );
}

export default App;
