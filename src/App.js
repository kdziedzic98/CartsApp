import React, { useState } from "react";
import "./styles/App.css";
import Topbar from "./components/Topbar";
import CartList from "./components/CartList";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(true);

  return (
    <div className="App">
      <Topbar
        data={data}
        setData={setData}
        error={error}
        setError={setError}
        added={added}
        setAdded={setAdded}
      />
      <CartList
        data={data}
        setData={setData}
        error={error}
        setAdded={setAdded}
      />
    </div>
  );
}

export default App;
