import Header from "../components/header";
import Footer from "../components/footer";

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center", minHeight: "70vh" }}>
        <h1>Servicios</h1>
        <p>Estos son los servicios que ofrecemos.</p>
      </main>
      <Footer />
    </>
  );
}
