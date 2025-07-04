import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
      marginTop: 'auto',
    }}>
      <p>© {new Date().getFullYear()} Sitio reservado para RetoMate XD</p>
    </footer>
  );
};

export default Footer;
