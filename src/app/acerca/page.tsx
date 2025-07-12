import Header from "../components/header";
import Footer from "../components/footer";

export default function AcercaPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center", minHeight: "70vh" }}>
        <h1>Acerca de Nosotros</h1>
        <p>Conoce más sobre nuestro sitio y equipo.</p>
      </main>
      <Footer />
    </>
  );
}
