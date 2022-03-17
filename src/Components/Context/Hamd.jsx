import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [hamd, setHamd] = React.useState(
    JSON.parse(window.localStorage.getItem("Hamd") || 0)
  );

  window.localStorage.setItem("Hamd", hamd);

  return (
    <Context.Provider value={{ hamd, setHamd }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
