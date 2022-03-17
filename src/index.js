import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as SalovatProvider } from "./Components/Context/Salovat";
import { Provider as HamdProvider } from "./Components/Context/Hamd";
import { Provider as IstigforProvider } from "./Components/Context/Istigfor";
import { Provider as SelectProvider } from "./Components/Context/Select";

ReactDOM.render(
  <React.StrictMode>
    <SelectProvider>
      <SalovatProvider>
        <HamdProvider>
          <IstigforProvider>
            <App />
          </IstigforProvider>
        </HamdProvider>
      </SalovatProvider>
    </SelectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
