import React from "react";
import { useFormContext } from "react-hook-form";
import HeaderImage from "./HeaderImage";

function ConnectForm({ HeaderImage }) {
  const methods = useFormContext();
  return (
    <>
      <HeaderImage {...methods} />;
    </>
  );
}

export default ConnectForm;
