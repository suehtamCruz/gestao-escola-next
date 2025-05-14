import styles from "styles/login.module.css";
import { login } from "services/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      toast.info("Usuário já autenticado!");
      router.push("/students");
    }
  }, [router]);

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    await login(name, password).then(
      () => {
        toast.success("Login realizado com sucesso!");
        router.push("/students");
      },
      (error) => {
        console.log(error);
        toast.error("Erro ao realizar login!");
      }
    );
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
          <button onClick={handleLogin} className={styles.button}>
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
