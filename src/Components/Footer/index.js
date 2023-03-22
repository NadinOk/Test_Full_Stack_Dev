import Styles from "./styles.module.scss";


const Footer = () => {
    return (
        <footer>
            <div className={Styles.first_line}>
                <ul className={Styles.footer_nav}>
                    <span className={Styles.span1}>AppCo</span>

                    <span>All rights reserved by ThemeTags</span>

                    <span>Copyrights © 2019. </span>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
