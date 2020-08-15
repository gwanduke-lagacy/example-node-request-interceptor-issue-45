import React, { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("https://www.example.com").then((res) => {
      setLoaded(true);
    });
  }, []);

  return <div className="App">{loaded && "loaded"}</div>;
}

export default App;
