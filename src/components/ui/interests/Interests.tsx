import styles from './interests.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Title } from '../title/Title';

export const Interests = () => {
  return (
    <section className={styles.interests} role="interests">
      <Title title="Intereses" />
      <div className={(styles.container, styles.container)}>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className={styles.content}>
            <article className={styles.details}>
              <h4>
                <BsPatchCheckFill
                  data-testid="details-icon"
                  className={styles.detailsIcon}
                />
                In ut adipisicing do nisi aliquip incididunt labore sint.
              </h4>
              <h4>
                <BsPatchCheckFill
                  data-testid="details-icon"
                  className={styles.detailsIcon}
                />
                Fugiat est dolor enim incididunt nisi qui est id sint aute
                cupidatat occaecat voluptate.
              </h4>
              <h4>
                <BsPatchCheckFill
                  data-testid="details-icon"
                  className={styles.detailsIcon}
                />
                Proident et deserunt sunt et irure mollit sunt.
              </h4>
              <h4>
                <BsPatchCheckFill
                  data-testid="details-icon"
                  className={styles.detailsIcon}
                />
                Aute id est aliqua dolore deserunt duis nostrud occaecat magna
                ut incididunt eu occaecat ut.
              </h4>
              <h4>
                <BsPatchCheckFill
                  data-testid="details-icon"
                  className={styles.detailsIcon}
                />
                Mollit mollit irure aliquip nulla voluptate consectetur.
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
