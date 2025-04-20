import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="content">
      <nav>
        <Link className="login-button" to="/login">
          Login
        </Link>
      </nav>
      <div className="container">
        <div className="header">
          <img
            className="logo"
            src="../../public/logo-sem-texto.png"
            alt="Hackathon Hub"
          />
          <div className="header-title">
            <h1 className="title">Hackathon</h1>
            <h1 className="title">
              <b className="typing-cursor">Hub</b>
            </h1>
          </div>
        </div>
        <p className="subtitle">
          Encontre os melhores hackathons <br /> ao redor do mundo.
        </p>
        <Link className="button" to="/hackathons">
          Ver Hackathons
        </Link>
      </div>
    </div>
  );
}
