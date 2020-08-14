import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/izquierda">
          <button>left</button>
        </Link>
        <Link to="/centro">
          <button>center</button>
        </Link>
        <Link to="/derecha">
          <button>right</button>
        </Link>
        <Link to="/general">
          <button>General</button>
        </Link>
      </nav>
    );
  }
}
