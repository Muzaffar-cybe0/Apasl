import "../Sass/footer.scss";
import Logo from "../assets/logo.png";
import FooterBtnIcon from "../assets/footer_emailBtn_icon.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_OldrChild-1">
        <div className="footer_OldrChild-1_child-1">
          <img src={Logo} alt="logo" />
          <p>Leading the Way in Medical Execellence, Trusted Care.</p>
        </div>

        <div className="footer_OldrChild-1_child-2">
          <h3>Important Links</h3>
          <div>
            <a href="#">Appointment</a>
            <a href="#">Doctors</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
          </div>
        </div>

        <div className="footer_OldrChild-1_child-3">
          <h3>Contact Us</h3>
          <div>
            <a href="#">Call: (237) 681-812-255</a>
            <a href="#">Email: fildineesoe@gmail.com</a>
            <a href="#">Address: 0123 Some place</a>
            <a href="#">Some country</a>
          </div>
        </div>

        <div className="footer_OldrChild-1_child-4">
          <h3>Newsletter</h3>
          <div>
            <input type="text" placeholder="Enter Your Email Address" />
            <button type="button">
              <img src={FooterBtnIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer_OlderChild-2">
        <div className="footer_OlderChild-2_child-1">
          <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        </div>
        <div className="footer_OlderChild-2_child-2">
          <a href="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://ru-ru.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/?hl=ru">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
