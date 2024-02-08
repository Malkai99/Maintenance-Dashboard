import { useState, useEffect, useRef } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const openBtnRef = useRef(null)

  const openTooltip = (e) => {
      if(!showTooltip){
        setShowTooltip(true);
    }
  };

  const closeTooltip = () => {
    if(showTooltip)
        setShowTooltip(false);
};

  const handleOutsideClick = (e) => {
    if (tooltipRef.current && !tooltipRef.current.contains(e.target) && openBtnRef.current && !openBtnRef.current.contains(e.target)) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <span
        ref={openBtnRef}
        onClick={openTooltip}
        className={`${showTooltip ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {children}
      </span>

      {showTooltip && (
        <div ref={tooltipRef} onClick={closeTooltip} className={` cursor-pointer select-none absolute z-10 bg-black text-white p-2 rounded-md -left-2 top-full text-sm sm:text-base max-w-[200px] lg:max-w-[300px] lg:w-[300px] w-[200px] transition-all duration-300 ease-in-out ${
            showTooltip ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
          }`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip