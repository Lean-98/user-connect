import styles from './about.module.css';
import { Title } from '../title/Title';

export const About = () => {
  return (
    <div className={styles.about} role="about">
      <Title title="Sobre mí" />
      <div className={styles.content}>
        <p className={styles.paragraph}>
          Culpa laboris fugiat reprehenderit ex mollit exercitation non. Commodo
          consectetur id eu et sint anim magna anim nostrud sunt cillum
          adipisicing. Ad deserunt non ad officia mollit sit mollit. Et Lorem
          ullamco est et exercitation Lorem eiusmod irure laboris qui.
        </p>
      </div>
    </div>
  );
};
