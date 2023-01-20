import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/tazulbinyounus/">
          https://www.linkedin.com/in/tazulbinyounus
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/TazulBinYounus">
          https://github.com/TazulBinYounus
        </a>
      </p>
      Copyright <span className={styles.brand}>Tazul Islam</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
