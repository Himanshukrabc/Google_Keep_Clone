import React from "react";
import logo from "./Images/keep-512.png"

function Header(){
  return (
    <>
      <div className="Header">
          <img alt="logo" src={logo} id="logo" display="inline block"/>
          <h3  display="inline block">Google Keep</h3>
      </div>
    </>
  );
}

export default Header;
