import React from "react";

function Header() {

    
  function handleClick() {
    props.allDelete();
}
  return (
    <header>
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
