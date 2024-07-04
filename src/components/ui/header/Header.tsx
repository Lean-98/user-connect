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
        src={
          '	https://res.cloudinary.com/ddiulrst8/image/upload/v1709133637/portfolio/vf8prwkedl412bzjcoa6.webp'
        }
        alt="Alexis Bazan"
        width={300}
        height={300}
      />
    </header>
  );
};
