import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center", minHeight: "70vh" }}>
        <h1>Contacto</h1>
        <p>Ponte en contacto con nosotros mediante este formulario o redes sociales.</p>
      </main>
      <Footer />
    </>
  );
}
