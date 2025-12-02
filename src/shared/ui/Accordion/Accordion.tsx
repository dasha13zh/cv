import React, { useState } from 'react';

import './Accordion.css';

type SimpleAccordionProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
};

export const Accordion = ({
  title,
  content,
  className,
}: SimpleAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion ${className ?? ''}`}>
      <button
        className={`accordion-button ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}>
        {title}
        <span className="accordion-arrow">▼</span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-inner">{content}</div>
      </div>
    </div>
  );
};
