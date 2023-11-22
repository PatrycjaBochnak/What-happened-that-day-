import "../styles/Welcome.css"
import React, { useEffect } from "react";

export const Welcome = ({scrlInfo}) => {

  useEffect(() => {
    scrlInfo.sr.reveal("#welcome #text");
    scrlInfo.sr.reveal("#welcome #content", { delay: scrlInfo.delay+300, origin: 'bottom' });
  }, [scrlInfo.sr]);

  return(
    <div id="welcome" className="welcome">
      <div id="text" className="welcome-text">
        <h3>What happened on that day</h3>
        <h4>in the past?</h4>
      </div>
      <div id="content" className="welcome-text">
        <p>
          &nbsp;
          Welcome to our historical exploration platform! We leverage the
          power of technology to connect you with the past. By utilizing your
          computer's local date, we search for historical events that occurred
          on this day in previous years. This way, you can learn about the
          significant moments that shaped history, all while enjoying the
          convenience of modern technology.
        </p>
      </div>
    </div>
  )
}