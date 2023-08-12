import React from "react";
import { Blob } from "./Blob";

export const BlobsBackground = () => {
  return (
    <>
      <span>
        <Blob className="-bottom-64 -left-36 opacity-10" />
        <Blob className="-top-64 -right-32 opacity-10" />
      </span>
    </>
  );
};
