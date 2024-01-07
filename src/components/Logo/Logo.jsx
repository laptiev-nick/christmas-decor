import { Link } from 'react-router-dom';
import { ReactComponent as LogoBlackIcon } from '../../icons/logo-black.svg';
import { ReactComponent as LogoWhiteIcon } from '../../icons/logo-white.svg';
import styles from './Logo.module.scss';

export const Logo = ({ color }) => {
    return (
        color === 'white' ? (
            <Link to={'/'}>
                <LogoWhiteIcon
                    width={96}
                    height={70}
                    className={styles.logo} 
                />
            </Link>
        ) : (
            <Link to={'/'}>
                <LogoBlackIcon
                    width={96}
                    height={70}
                    className={styles.logo} 
                />
                </Link>
            )
    );
};
