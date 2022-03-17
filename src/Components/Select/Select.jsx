import React from "react";
import { Context as SelectContext } from "../Context/Select";

import { FormControl, Select, MenuItem } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// });

const Select1 = () => {
  const { selects, setSelects } = React.useContext(SelectContext);
  // console.log(select);
  // const classes = useStyles();
  return (
    <main>
      <FormControl>
        <Select
          id="demo-simple-select"
          value={selects}
          onChange={evt => setSelects(evt.target.value)}
        >
          <MenuItem value={"istig'for"}>Istig'for</MenuItem>
          <MenuItem value={"salovat"}>Salovat</MenuItem>
          <MenuItem value={"hamd"}>Hamd</MenuItem>
        </Select>
      </FormControl>
    </main>
  );
};

export default Select1;
