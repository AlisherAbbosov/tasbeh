import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [selects, setSelects] = React.useState("istig'for");

  return (
    <Context.Provider value={{ selects, setSelects }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
