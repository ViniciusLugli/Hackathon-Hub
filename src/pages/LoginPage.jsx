import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // envia o formulário como POST
    axios
      .post("/api/endpoint", { email, senha })
      .then((res) => {
        // redireciona para a página inicial
        navigate("/", { replace: true });
      })
      .catch((err) => console.error(err));
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
