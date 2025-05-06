import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Validações
const getValidationIcon = function (isValid) {
  return isValid ? "✅" : "❌";
};

export default function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmada, setSenhaConfirmada] = useState("");

  const validaMin = senha.length >= 8;
  const validaMaiuscula = /[A-Z]/.test(senha);
  const validaMinuscula = /[a-z]/.test(senha);
  const validaNumero = /\d/.test(senha);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== senhaConfirmada) {
      alert("As senhas não coincidem");
      return;
    }

    axios
      .post("/api", { nome, email, senha })
      .then((response) => {
        console.log("Success:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
        if (error.response) {
          console.log("Response Error:", error.response.data);
        }
      });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="header-login">
          <h1 className="title">Criar Conta</h1>
        </div>
        <p className="subtitle-login">Digite seus dados</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            required
            type="text"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            className="input"
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            required
            type="password"
            name="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <input
            className="input"
            required
            type="password"
            name="passwordValidation"
            placeholder="Confirmar Senha"
            value={senhaConfirmada}
            onChange={(e) => setSenhaConfirmada(e.target.value)}
          />

          <ul className="validacoes">
            <div>
              <li className="validacao">
                {getValidationIcon(validaMin)} Mínimo de 8 caracteres
              </li>
              <li className="validacao">
                {getValidationIcon(validaMaiuscula)} Pelo menos uma letra
                maiúscula
              </li>
            </div>
            <div>
              <li className="validacao">
                {getValidationIcon(validaMinuscula)} Pelo menos uma letra
                minúscula
              </li>
              <li className="validacao">
                {getValidationIcon(validaNumero)} Pelo menos um número
              </li>
            </div>
          </ul>

          <button className="button entry-button" type="submit">
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
