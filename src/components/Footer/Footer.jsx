import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.blocksWrapper}>
                    <div className={styles.block}>
                        <Logo color={'white'} />
                        <p className={styles.description}>
                            At Christmas Decorations Shop, we collect and sell everything connected with the festive season, from tree decorations to clothing and Christmas cards.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Navigation.</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Contacts.</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Visit Us.</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}