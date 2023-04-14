import "./footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <ul className="social-icons">
                <li>
                    <img src="./src/assets/images/fb.png" alt="Logo Facebook" />
                </li>
                <li>
                    <img src="./src/assets/images/tw.png" alt="Logo Twitter" />
                </li>
                <li>
                    <img src="./src/assets/images/ig.png" alt="Logo Instagram" />
                </li>
            </ul>

            <img src="./src/assets/images/logo.png" alt="Logo Organo" />

            <p>Desenvolvido por Claudinei</p>
        </section>
    )
}

export default Footer;