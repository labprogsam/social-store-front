import homeBanner from "../../assets/homeBanner/homeBanner.png";

function HomeBanner({ ref }) {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center w-full"
      ref={ref}
      style={{
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para escurecer o fundo e melhorar contraste do texto */}
      <div className="absolute inset-0 bg-white opacity-40"></div>

      {/* Container de conteúdo */}
      <div className="w-full z-10 max-w-[1400px] ml-16 space-y-6">
        {/* Título principal */}
        <h1 className="text-5xl text-[#0B236D] leading-tight">
          <span className="font-bold">Compre </span>com propósito,
          <br />
          <span className="font-bold">transforme</span> vidas.
        </h1>

        {/* Descrição */}
        <p className="text-xl text-black max-w-xl leading-relaxed">
          Nossa plataforma é um espaço digital dedicado à divulgação e
          comercialização de produtos desenvolvidos por ONGs e projetos sociais.
        </p>

        {/* Botão Saiba Mais */}
        <button className="mt-8 bg-[#009FE3] hover:bg-[#007bbf] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}

export default HomeBanner;
