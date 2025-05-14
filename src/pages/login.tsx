import styles from "styles/login.module.css";
import { login } from "services/auth";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    login(name, password).then((data) => console.log(data));
  };

  return (
    <div className={styles.login}>
      <section className={styles["login-section"]}>
        <h1>Login</h1>

        <form className={styles["login-form"]}>
          <input type="text" placeholder="Nome" onChange={handleSetName} />
          <input
            type="password"
            placeholder="Senha"
            onChange={handleSetPassword}
          />
          <button onClick={handleLogin} className={styles.button}>Entrar</button>
        </form>
      </section>
    </div>
  );
}
