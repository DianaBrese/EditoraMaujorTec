import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h2>404!</h2>
    <p>
      Página não encontrada ou removida. <Link to="/">Ir para Home Page</Link>
    </p>
  </>
);

export default NotFound;
