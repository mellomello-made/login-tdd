import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8080");
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return <div className="App">test</div>;
}

export default App;
