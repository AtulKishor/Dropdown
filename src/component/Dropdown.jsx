import React, { useState } from 'react';
import "./Dropdown.css";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Select");
  

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (item) => {
    setButtonText(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="button" type="button" >{buttonText} </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li className="dropdown-item" key={index} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
