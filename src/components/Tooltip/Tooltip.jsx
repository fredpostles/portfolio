import React, { useEffect, useState, useRef, useCallback } from "react";
import "../../css/tooltip.css";

const Tooltip = ({ children, content, delay = 50, direction = "bottom" }) => {
  const timeoutRef = useRef(null);
  const [active, setActive] = useState(false);

  const showTip = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActive(true);
    }, delay);
  }, [delay]);

  const hideTip = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setActive(false);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`Tooltip-Tip ${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
