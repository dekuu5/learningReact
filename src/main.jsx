import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.jsx";

let container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" bread="Havanese" />
      <Pet name="Pepper" animal="Bird" bread="Cockatiel" />
      <Pet name="Doink" animal="Cat" bread="Mixed" />
    </div>
  );
};

root.render(<App />);
