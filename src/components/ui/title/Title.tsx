import styles from './title.module.css';
interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return (
    <>
      <h2 className={`${className} ${styles.title}`}>{title}</h2>
    </>
  );
};
