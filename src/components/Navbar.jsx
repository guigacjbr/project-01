import Link from "next/Link";
import styles from "./Navbar.module.css";

const categories = [
  
  {
    label: "Tabela de Quebras",
    link: "./app/tabela",
  },
];

const Menu = (props) => (
  <nav>
    <div className={styles.menu}>
      {categories.map((items) => (
        <div className={styles.itemMenu}>
          <Link href={items.link}>
            <span className={styles.link}>{items.label}</span>
          </Link>
        </div>
      ))}
    </div>
  </nav>
);

export default Menu;
