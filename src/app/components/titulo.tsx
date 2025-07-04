import React from 'react';
import '../globals.css';

type TituloProps = {
  texto: string;
};

const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return <h1 className="titulo">{texto}</h1>;
};

export default Titulo;

