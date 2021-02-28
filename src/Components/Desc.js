import React from "react";
import { Link } from "react-router-dom"
const Desc = ({desc}) => {
  return (
      <>
    <Link className="item" to="/App">
    <button>Go BACK</button>
  </Link>
  <div className="page-content">{desc}</div>
  </>
  )
};
export default Desc;