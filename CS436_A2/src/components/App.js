import React from 'react';
import TopPanel from './TopPanel';
import TextInput from "./TextInput";
import "./App.css";

const App = () => {   //this is how you make a functional component
  return (
      <React.Fragment>
      <div className="TopPanel"><TopPanel/></div>
      <div><TextInput/></div>
      </React.Fragment>
  );
};

export default App;