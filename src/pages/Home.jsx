import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="text-5xl font-bold text-white">
  🔥 MANANTIAL DE VIDA 🔥</h1>

        <p>Bienvenido a nuestra iglesia virtual</p>

        <div className="hero-buttons">
          <button className="btn primary">Ver Sermones</button>
          <button className="btn secondary">Donar</button>
        </div>
      </div>
    </section>
  );
}
