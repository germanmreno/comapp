import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Loading.css";
import { Spinner } from "reactstrap";

function Loading() {
  return (
    <div className="divPadre">
      <div className="divHijo">
        <div className="logo-container"></div>
        <Spinner color="light" />
      </div>
    </div>
  );
}

export default Loading;
