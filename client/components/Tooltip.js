import React from "react";

const Tooltip = () => {
   return (
      <div>
         <h3>How to add a tooltip in React</h3>
         <p data-tip="Like, Subscribe and Share!" data-event="click">
            Clue Mediator
         </p>
         <a
            href="https://www.cluemediator.com"
            target="_blank"
            data-tip="Click to visit Clue Mediator"
            rel="noopener noreferrer"
         >
            www.cluemediator.com
         </a>
         <ReactTooltip globalEventOff="click" />
      </div>
   );
};

export default Tooltip;
