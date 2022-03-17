import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [istigfor, setIstigfor] = React.useState(
    JSON.parse(window.localStorage.getItem("Istig'for") || 0)
  );

  window.localStorage.setItem("Istig'for", istigfor);

  return (
    <Context.Provider value={{ istigfor, setIstigfor }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
