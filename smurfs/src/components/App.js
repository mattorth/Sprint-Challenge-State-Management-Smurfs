import React from "react";
import "./App.css";

import SmurfData from "./SmurfData";
import Form from "./Form";

const App = (props) => {

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfData />
        <Form />
      </div>
    );
}

export default App;
