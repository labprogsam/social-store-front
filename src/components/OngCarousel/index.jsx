// Importando os componentes necessários do biblioteca Swiper responsável por criar o carrossel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importando os assets necessários
import dividingLine from "../../assets/CarouselMoc/dividingLine.svg";
import bannerCarousel from "../../assets/CarouselMoc/bannerCarousel.svg";
import { useEffect, useState, forwardRef } from "react";

// Estilos para o slide e as imagens
const slideStyle =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
const imageStyle =
  "cursor-pointer flex justify-center items-center sm:h-52 sm:w-52 bg-gray-100 font-semibold border border-gray-300 rounded-full shadow-2xl mx-auto transition-transform transform hover:scale-105";

// Componente OngCarousel que renderiza o carrossel de ONGs
const OngCarousel = forwardRef((props, ref) => {
  const [ongs, setOngs] = useState([]);
  const [pages, setPages] = useState([]);

  // Função para buscar as ONGs
  useEffect(() => {
    async function fetchOngs() {
      try {
        const response = await fetch("http://localhost:8000/api/ongs");
        const data = await response.json();
        setOngs(data);
      } catch (error) {
        console.error("Erro ao carregar ONGs:", error);
      }
    }

    fetchOngs();
  }, []);

  useEffect(() => {
    const pages = Math.ceil(ongs.length / 8);
    const items = [...Array(pages).keys()];
    setPages([...items]);
  }, [ongs]);

  if (ongs.length === 0) {
    return <div className="text-center p-10">Carregando ONGs...</div>;
  }

  return (
    <section
      ref={ref}
      className="p-14 relative"
      style={{
        // Definindo o background do carrossel com a imagem importada
        backgroundImage: `url(${bannerCarousel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título do carrossel */}
      <div className="text-center text-4xl font-inter font-bold">
        Nossas Ongs
        <img
          src={dividingLine}
          alt="Dividing line"
          className="sm:w-40 mx-auto mt-4"
        />
      </div>

      {/* Configurando o Swiper com os módulos de navegação e paginação */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ maxWidth: "1400px" }}
      >
        {pages.map((_, page) => (
          <SwiperSlide key={page}>
            <div className={slideStyle}>
              {ongs.map(
                (ongObj, index) =>
                  index >= page * 8 &&
                  index < (page + 1) * 8 && (
                    <div
                      key={index}
                      className="flex justify-center mt-20 mb-20"
                    >
                      {ongObj.gallery_images_url || ongObj.logo ? (
                        <a href={`/app/ongs/${ongObj.id}`}>
                          <img
                            src={ongObj.logo || ongObj.gallery_images_url}
                            alt={`ONG ${ongObj.name}`}
                            className={imageStyle}
                          />
                        </a>
                      ) : (
                        <span
                          className="flex justify-center items-center h-52 w-52 bg-gray-100 rounded-full font-semibold sm:text-xl text-center text-gray-700 shadow-2xl border border-gray-300 transition-transform transform hover:scale-105 cursor-pointer"
                          onClick={() =>
                            (window.location.href = `/app/ongs/${ongObj.id}`)
                          }
                        >
                          {ongObj.name}
                        </span>
                      )}
                    </div>
                  )
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default OngCarousel;
