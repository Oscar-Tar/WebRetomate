import React from 'react';
import Titulo from './components/titulo';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
      <>
        <Header />
          <main style={{ padding: "2rem", textAlign: "center", minHeight: "70vh" }}>
           <Titulo texto="Bienvenidos a RetoMate"/>
     
          </main>
        <Footer />
      </>
  );
}

export default App;
