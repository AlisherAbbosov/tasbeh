import React from "react";

import { Context as SelectContext } from "../Context/Select";
import { Context as SalovatContext } from "../Context/Salovat";
import { Context as IstigforContext } from "../Context/Istigfor";
import { Context as HamdContext } from "../Context/Hamd";
import { Button, Alert } from "@mui/material";

const CounterBtn = () => {
  let [number, setNumber] = React.useState(0);
  let { selects } = React.useContext(SelectContext);
  let { salovat, setSalovat } = React.useContext(SalovatContext);
  let { hamd, setHamd } = React.useContext(HamdContext);
  let { istigfor, setIstigfor } = React.useContext(IstigforContext);

  React.useEffect(() => {
    if (number === 0) {
      if (selects === "istig'for") {
        alert(`Istig'for = ${istigfor}`);
      } else if (selects === "salovat") {
        alert(`Salovat = ${salovat}`);
      } else if (selects === "hamd") {
        alert(`Hamd = ${hamd}`);
      }
    }
  }, [number]);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setNumber(number + 1);
          if (number === 5) {
            if (selects === "hamd") {
              setHamd(hamd + 1);

              setNumber(0);
            } else if (selects === "istig'for") {
              setIstigfor(istigfor + 1);

              setNumber(0);
            } else if (selects === "salovat") {
              setSalovat(salovat + 1);

              setNumber(0);
            }
          }
        }}
      >
        {number}
      </Button>
    </>
  );
};

export default CounterBtn;
