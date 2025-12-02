import data from '../../../shared/api/data.json';

import './ContactMeButton.css';

export const ContactMeButton = () => {
  return (
    <div className="contact-me-button__container">
      <a href={data.telegram} target="_blank" rel="noopener noreferrer">
        <button className="contact-me-button">
          Позвать на собесеседование
        </button>
      </a>
    </div>
  );
};
