import "./footer.css";

// Social icons
import facebookIcon from "../../assets/images/fb.png";
import twitterIcon from "../../assets/images/tw.png";
import instagramIcon from "../../assets/images/ig.png";

import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <section className="footer">
            <ul className="social-icons">
                <li>
                    <img src={facebookIcon} alt="Logo Facebook" />
                </li>
                <li>
                    <img src={twitterIcon} alt="Logo Twitter" />
                </li>
                <li>
                    <img src={instagramIcon} alt="Logo Instagram" />
                </li>
            </ul>

            <img src={logo} alt="Logo Organo" />

            <p>Desenvolvido por Claudinei</p>
        </section>
    )
}

export default Footer;