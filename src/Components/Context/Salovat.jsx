import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [salovat, setSalovat] = React.useState(
    JSON.parse(window.localStorage.getItem("Salovat") || 0)
  );

  window.localStorage.setItem("Salovat", salovat);

  return (
    <Context.Provider value={{ salovat, setSalovat }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
