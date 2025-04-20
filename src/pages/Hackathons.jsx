import { Link } from "react-router-dom";

export default function Hackathons() {
  return (
    <div>
      <h1>Hackathons</h1>
      <p>Aqui você pode ver todos os hackathons disponíveis.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}
