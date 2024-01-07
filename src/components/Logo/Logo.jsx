import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../icons/original-desk-1x-logo-desk-1x.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link to={'/'}>
            <LogoIcon
                width={96}
                height={70}
                className={styles.logo} 
            />
        </Link>     
    )
}