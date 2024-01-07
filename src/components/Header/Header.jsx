import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Container } from "components/Container/Container";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <ul className={styles.topPanel}>
                    <li className={styles.topPanelItem}>
                        <p className={styles.topPanelText}>Open 8 am - 8 pm</p>
                    </li>
                    <li className={styles.topPanelItem}>
                        <a className={styles.topPanelTextUnderlined} href="tel:+12345678900">+1 (234) 567 89 00</a>
                    </li>
                    <li className={styles.topPanelItem}>
                        <a className={styles.topPanelTextUnderlined} href="mailto:christmasdecor@email.com">christmasdecor@email.com</a>
                    </li>
                </ul>
            </Container>
            <nav className={styles.navigation}>
                <Container>
                    <div className={styles.bottomPanel}>
                        <Logo />
                        <div className={styles.listsWrapper}>
                            <ul className={styles.menuList}>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href="#">Bestsellers</a>  
                                </li>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href="#">About us</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href="#">Decorations</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href="#">FAQ</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLink} href="#">Contacts</a>
                                </li>
                            </ul>
                            <ul className={styles.socialsList}>
                                <li className={styles.socialsItem}>
                                    <a className={styles.socialsLink} href="#">
                                        <TfiFacebook className={styles.socialsIcon}/>   
                                    </a>
                                </li>
                                <li className={styles.socialsItem}>
                                    <a className={styles.socialsLink} href="#">
                                        <FaInstagram className={styles.socialsIcon}/>        
                                    </a>
                                </li>
                                <li className={styles.socialsItem}>
                                    <a className={styles.socialsLink} href="#">
                                        <FaYoutube className={styles.socialsIcon}/>
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    )
}