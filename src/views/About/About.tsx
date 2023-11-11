import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Bem-vindo à Minha Loja</h1>
        <p>Seu destino para uma experiência de compras de qualidade e personalizada</p>
      </header>

      <section className="introduction">
        <p>
          Na Minha Loja, acreditamos em começar pequeno, mas com grandes ambições. Como um promissor refúgio de varejo, estamos comprometidos em oferecer aos nossos clientes produtos de alta qualidade
          e um nível incomparável de serviço personalizado. Entendemos que suas necessidades são únicas, e é por isso que nossa abordagem ao atendimento ao cliente é tão individual quanto você.
        </p>
      </section>

      <section className="curated-selections">
        <h2>Seleções Curadas</h2>
        <p>
          A qualidade importa. É por isso que cada item em nossas prateleiras foi escolhido a dedo para garantir que você receba produtos que não apenas atendam, mas superem suas expectativas. Seja
          você à procura dos últimos gadgets, livros que são indispensáveis ou roupas chiques, temos tudo o que você precisa.
        </p>
      </section>

      <section className="personal-touch">
        <h2>Toque Pessoal</h2>
        <p>
          Comprar é mais do que apenas uma transação; é sobre construir relacionamentos. Nossa equipe dedicada dedica tempo para entender o que você está procurando, oferecendo recomendações
          personalizadas e assistência a cada passo do caminho.
        </p>
      </section>

      <section className="join-our-journey">
        <h2>Junte-se à Nossa Jornada</h2>
        <p>Estamos apenas começando e adoraríamos que você fizesse parte do nosso crescimento. Visite-nos, explore nossas seleções e deixe-nos tornar sua experiência de compras inesquecível.</p>
        <p>Somos mais do que apenas uma loja - somos uma comunidade. Bem-vindo à Minha Loja.</p>
      </section>
    </div>
  );
};

export default About;
