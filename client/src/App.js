import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      // console.log(response.data);
      setListOfPosts(response.data);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
