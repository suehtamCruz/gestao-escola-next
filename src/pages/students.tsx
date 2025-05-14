import { useEffect, useState } from "react";  
import styles from "../styles/students.module.css";
import { getStudentByName, getStudents } from "services/students";

export default function Students() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getStudents().then((data) => console.log(data));
  }, []);

  const searchStudents = () => {
    console.log(search); 
    getStudentByName(search).then((data) => console.log(data));
  };

  return (
    <div>
      <header className={styles.header}>
        <input
          type="text"
          className={styles.input}
          placeholder="Procurar aluno"
          onChange={handleSearch}
        />

        <button
          className={styles.button}
          onClick={searchStudents}
          disabled={search.length <= 3}
        >
          Procurar
        </button>
      </header>
    </div>
  );
}
