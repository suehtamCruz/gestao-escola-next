import "styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/header/header";
import { useEffect, useState } from "react";
import Login from "./login";
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }: AppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <div></div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Login />
        </>
      )}

      <ToastContainer />
    </div>
  );
}
