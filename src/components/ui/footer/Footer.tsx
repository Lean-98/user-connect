import styles from './footer.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Link href="/" className={styles.link}>
        <span className={styles.text}>© {new Date().getFullYear()}</span>
      </Link>
    </div>
  );
};
