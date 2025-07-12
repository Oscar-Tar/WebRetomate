import Header from "../components/header";
import Footer from "../components/footer";

export default function InicioPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center", minHeight: "70vh" }}>
        <h1>Página de Inicio</h1>
        <p>Bienvenido a la página de inicio.</p>
      </main>
      <Footer />
    </>
  );
}
