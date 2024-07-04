import Image from 'next/image';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header} role="header">
      <div className={styles.content}>
        <h1 className={styles.fullName}>Alexis Bazan</h1>
        {/* <p className={styles.paragraph}>
          Do ex id ullamco adipisicing ex amet.
        </p> */}
      </div>
      <Image
        className={styles.profileImage}
        src={'https://avatars.githubusercontent.com/u/104113851?v=4'}
        alt="Alexis Bazan"
        width={300}
        height={300}
      />
    </header>
  );
};
