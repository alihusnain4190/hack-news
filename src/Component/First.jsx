import React, { useContext } from "react";
import { useGlobalContext } from "../context/context";
const First = () => {
  const { loading } = useGlobalContext();
  console.log(loading);
  return <div>hello</div>;
};

export default First;
