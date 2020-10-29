import React from "react";
import { useFormContext } from "react-hook-form";
import HeaderImage from "./HeaderImage";

function ConnectForm({ children }) {
  const methods = useFormContext();
  return <HeaderImage {...methods} />;
}

export default ConnectForm;
