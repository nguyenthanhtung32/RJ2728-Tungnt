import styles from "./Footer.module.css"
interface IProps {
  title: undefined;
}

const Footer: React.FC<IProps> = (props) => {
  const { title } = props;

  return (
    <footer className={styles.neo}>
      <a href="#">Contact Us!!!</a>
      {title}
    </footer>
  );
};

export default Footer;
