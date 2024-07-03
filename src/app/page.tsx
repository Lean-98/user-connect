import { About, ContactForm, Footer, Header, Interests } from '../components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
        <About />
        <Interests />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
