import { useLocation, Navigate } from "react-router";
import { useState } from "react";

export default function Scan() {
  const location = useLocation();
  const url = location.state?.url;

  const [status, setStatus] = useState("idle");

  if (!url) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1>{url}</h1>
    </>
  );
}
