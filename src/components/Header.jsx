import React from "react";

function Header({Name , setName}) {
   return (
    <div>
      <h1>Name: {Name}</h1>
      <button onClick ={() => setName("Rajput 💎")}>Change Name</button>
    </div>
   )
}
export default Header;