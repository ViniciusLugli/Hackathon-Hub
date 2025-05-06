import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api", { email, senha })
      .then((response) => {
        console.log("Success:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
        // Se a resposta de erro tiver uma resposta com o corpo
        if (error.response) {
          console.log("Response Error:", error.response.data);
        }
      });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="header-login">
          <h1 className="title">Login</h1>
        </div>
        <p className="subtitle-login">Digite seus dados</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="button entry-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
