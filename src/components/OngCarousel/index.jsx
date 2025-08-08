// Importando os componentes necessários do biblioteca Swiper responsável por criar o carrossel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importando os assets necessários
import dividingLine from "../../assets/CarouselMoc/dividingLine.svg";
import bannerCarousel from "../../assets/CarouselMoc/bannerCarousel.svg";
import ong1 from "../../assets/CarouselMoc/ong1.svg";
import ong2 from "../../assets/CarouselMoc/ong2.svg";
import ong3 from "../../assets/CarouselMoc/ong3.svg";
import ong4 from "../../assets/CarouselMoc/ong4.svg";
import ong5 from "../../assets/CarouselMoc/ong5.svg";
import ong6 from "../../assets/CarouselMoc/ong6.svg";
import ong7 from "../../assets/CarouselMoc/ong7.svg";
import ong8 from "../../assets/CarouselMoc/ong8.svg";
import { useEffect, useState } from "react";

// Estilos para o slide e as imagens
const slideStyle =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
const imageStyle = "cursor-pointer mx-auto";

// Componente OngCarousel que renderiza o carrossel de ONGs
function OngCarousel({ ref }) {
  const [ongs, setOngs] = useState([
    { name: "ONG1", logo: ong1, id: 1 },
    { name: "ONG1", logo: ong2, id: 2 },
    { name: "ONG1", logo: ong3, id: 3 },
    { name: "ONG1", logo: ong4, id: 4 },
    { name: "ONG1", logo: ong5, id: 5 },
    { name: "ONG1", logo: ong6, id: 6 },
    { name: "ONG1", logo: ong7, id: 7 },
    { name: "ONG1", logo: ong8, id: 8 },
    { name: "ONG1", logo: ong1, id: 9 },
    { name: "ONG1", logo: ong2, id: 10 },
    { name: "ONG1", logo: ong3, id: 11 },
    { name: "ONG1", logo: ong4, id: 12 },
    { name: "ONG1", logo: ong5, id: 13 },
    { name: "ONG1", logo: ong6, id: 14 },
    { name: "ONG1", logo: ong7, id: 15 },
    { name: "ONG1", logo: ong8, id: 16 },
    { name: "ONG1", logo: ong1, id: 17 },
    { name: "ONG1", logo: ong2, id: 18 },
    { name: "ONG1", logo: ong3, id: 19 },
    { name: "ONG1", logo: ong4, id: 20 },
    { name: "ONG1", logo: ong5, id: 21 },
    { name: "ONG1", logo: ong6, id: 22 },
    { name: "ONG1", logo: ong7, id: 23 },
    { name: "ONG1", logo: ong8, id: 24 },
    { name: "ONG1", logo: ong1, id: 25 },
    { name: "ONG1", logo: ong2, id: 26 },
    { name: "ONG1", logo: ong3, id: 27 },
    { name: "ONG1", logo: ong4, id: 28 },
    { name: "ONG1", logo: ong5, id: 29 },
    { name: "ONG1", logo: ong6, id: 30 },
    { name: "ONG1", logo: ong7, id: 31 },
    { name: "ONG1", logo: ong8, id: 32 },
  ]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pages = Math.ceil(ongs.length / 8);
    const items = [...Array(pages).keys()];
    setPages([...items]);
  }, [ongs]);

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
          <SwiperSlide>
            <div className={slideStyle}>
              {ongs.map(
                (ongObj, index) =>
                  index >= page * 8 &&
                  index < (page + 1) * 8 && (
                    <div key={index} className="flex justify-center mt-20 mb-20">
                      <a href={`/app/ongs/${ongObj.id}`}>
                        <img
                          src={ongObj.logo}
                          alt={`ONG ${index + 1}`}
                          className={imageStyle}
                        />
                      </a>
                    </div>
                  )
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OngCarousel;
