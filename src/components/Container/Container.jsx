import styles from './Container.module.scss';

export const Container = ({ children, style }) => {
    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    )
}