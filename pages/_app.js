import { useState, useEffect } from "react";
import "./styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [password, setPassword] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [mounted, setMounted] = useState(false);
  const storage =
    typeof window !== "undefined" ? localStorage.getItem("password") : null;

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (!password || !correct) && !storage ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        height: "100vh",
      }}
    >
      <img src="https://ecbase.nl/images/logo.png" alt="ecbase" style={{ width: "100px" }} />
      <span style={{ textAlign: "center", fontSize: "14px" }}>Geef wachtwoord in</span>
      <input
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #eee",
          padding: "5px",
        }}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{
          borderRadius: "5px",
          backgroundColor: "#000",
          color: "#fff",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={() => {
          if (password === process.env.NEXT_PUBLIC_PASSWORD) {
            setCorrect(true);
            localStorage.setItem("password", password);
          }
        }}
      >
        Inloggen
      </button>
    </div>
  ) : (
    <Component {...pageProps} />
  );
}
