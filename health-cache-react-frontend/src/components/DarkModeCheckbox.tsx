
import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './claims/claims.css';


const DarkModeCheckBox: React.FC<any> = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
    <ButtonGroup className="mb-2">
    <ToggleButton
      id="toggle-check"
      type="checkbox"
      variant="secondary"
      checked={darkMode}
      value="1"
      onChange={(e) => 
        { 
            setDarkMode(e.currentTarget.checked);

            document.body.className = document.body.className === "body-dk" ? "body-lt": "body-dk";

            /*
                        //let cn = document.body.className === "body-dk" ? " body-lt": " body-dk";
            document.body.className = cn;
            Array.from(document.getElementsByTagName("div")).map((d) => { 
                let classes = d.className;
                d.remove();
                d.className += cn}); */

        }}
    >
      DarkMode
    </ToggleButton>
  </ButtonGroup>
  </>
    )

}

export default DarkModeCheckBox;