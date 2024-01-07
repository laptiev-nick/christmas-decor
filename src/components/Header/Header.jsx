import styles from "./Header.module.scss";
import { Container } from "components/Container/Container";
import { Logo } from "../Logo/Logo";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <ul className={styles.topPanel}>
                    <li className={styles.topPanelItem}>
                        <p className={styles.topPanelText}>Open 8 am - 8 pm</p>
                    </li>
                    <li className={styles.topPanelItem}>
                        <a className={styles.topPanelText} href="tel:+12345678900">+1 (234) 567 89 00</a>
                    </li>
                    <li className={styles.topPanelItem}>
                        <a className={styles.topPanelText} href="mailto:christmasdecor@email.com">christmasdecor@email.com</a>
                    </li>
                </ul>
            </Container>
            <nav className={styles.navigation}>
                <Container>
                <Logo />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}