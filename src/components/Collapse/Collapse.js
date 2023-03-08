
import { useState } from "react";

import "./_collapse.scss";

import arrowdown from "../../assets/arrowdown.png";

function Collapse({ page, content, title }) {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      
      <div
        className={`collapse__content ${
          !isOpen ? "collapse__content--margin" : ""
        }`}
       
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="collapse__title">{title}</div>
        <img
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--rotate" : ""
          }`}
          src={arrowdown}
          alt=""
        />
      </div>
      
      <div className={isOpen ? "collapse__text" : "collapse__hide"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;