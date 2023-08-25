import React from "react";
import Navbar from "./component/Navbar";
import Todolist from "./component/Todolist";
import ThemeContextProvider from "./Context/ThemeContext";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
        <ThemeContextProvider>
     <Navbar />
     <Todolist />
     </ThemeContextProvider>
     </AuthContextProvider>
     </div>
    </div>
  );
}

export default App;
