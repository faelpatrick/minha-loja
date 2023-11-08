import React from "react";
import "./Home.css";


const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Bem-vindo à Nossa Loja</h1>
      <p>Descubra uma variedade de produtos de alta qualidade que se encaixam perfeitamente no seu dia a dia. De roupas casuais a acessórios modernos, temos tudo o que você precisa.</p>

      <section className="quality-pitch">
        <h2>Qualidade Incomparável</h2>
        <p>Nossos produtos são feitos com os melhores materiais e projetados para durar. Compre conosco e experimente a combinação perfeita de estilo, conforto e durabilidade.</p>
      </section>
    </div>
  );
};

export default Home;
