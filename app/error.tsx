"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);

  return (
    <>
      <div>The requested page doesn&apos;t exist</div>
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
