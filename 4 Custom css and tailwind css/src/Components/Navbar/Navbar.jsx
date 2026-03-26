import React from "react";
import Styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.parent} >
      <h1>Company</h1>
      <button className={Styles.btn}>
        I am the button from navbar having btn class.
      </button>
    </div>
  );
};

export default Navbar;
