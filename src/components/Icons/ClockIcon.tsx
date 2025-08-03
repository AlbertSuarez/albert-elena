import React from 'react';

interface ClockIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ClockIcon: React.FC<ClockIconProps> = ({ 
  className, 
  width = 24, 
  height = 24 
}) => {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"/>
    </svg>
  );
};

export default ClockIcon;