import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <hr className="footer__divider" />
      <div className="footer__columns">
        <img src="/footer-photo.jpeg" alt="footer photo" />
        <div>
          <blockquote>
            В свободное от&nbsp;работы время я&nbsp;гуляю с&nbsp;собакой, смотрю
            кино и&nbsp;открываю для&nbsp;себя новые страны
          </blockquote>
        </div>
      </div>
    </footer>
  );
};
