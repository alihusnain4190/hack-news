import React from "react";

import { useGlobalContext } from "./context";

const First = () => {
  console.log(useGlobalContext());
  const name = useGlobalContext();
  console.log(name);
  return <h2>stories component</h2>;
};
export default First;
