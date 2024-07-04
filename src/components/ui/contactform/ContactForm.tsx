import styles from './contactform.module.css';
import { Title } from '../title/Title';
import { Form } from './Form';

export const ContactForm = () => {
  return (
    <>
      <section className={styles.contact} id="contact">
        <Title title="Contacto" />
        <Form />
      </section>
    </>
  );
};
