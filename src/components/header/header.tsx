import styles from "./header.module.css";
import { CIcon } from "@coreui/icons-react";
import { cilAccountLogout } from "@coreui/icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/students">
        Alunos
      </Link>

      <Link className={styles.link} href="/schools">
        Escolas
      </Link> 

      <CIcon icon={cilAccountLogout} className={styles.icon} size="sm" />
    </header>
  );
}
