import "../sass/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
     
      <div className="footer-top">
        <ul className="footer-links">
          <li>About Eventime</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Event</li>
          <li>Venue</li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-pinterest-p"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="subscription">
          <input type="email" placeholder="Your Email" />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
        <p>© 2024 Exhibz. All rights reserved</p>
      </div>

    </footer>
  );
}
