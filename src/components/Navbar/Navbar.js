import React from 'react';
import Button from './../Button/Button';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function NavBar() {

  const styleTeam = { backgroundColor: "#6b8896", }
  const styleAddService = { backgroundColor: "#299efc", }

  return (
    <Navbar className="navbar">
      <h1>Wilfring Ltd.</h1>
      <div>

      <Button 
        style={styleTeam}
        text="Teams"
        />
      <Button 
        style={styleAddService}
        text="Add Service"
        />
      </div>

    </Navbar>
  )
}

export default NavBar;