import styles from 'components/button/Button.module.scss';

const Button = () => {
  return (
    <button className={styles.button}>
      <span className={styles.label}>Button</span>
    </button>
  );
};

export default Button;
