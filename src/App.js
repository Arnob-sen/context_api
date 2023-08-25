import React from "react";
import Navbar from "./component/Navbar";
import Todolist from "./component/Todolist";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
     <Navbar />
     <Todolist />
     </ThemeContextProvider>
     </div>
    </div>
  );
}

export default App;
