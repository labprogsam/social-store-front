
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import dividingLine from '../../assets/CarouselMoc/dividingLine.svg';
import bannerCarousel from '../../assets/CarouselMoc/bannerCarousel.svg';

import ong1 from '../../assets/CarouselMoc/ong1.svg';
import ong2 from '../../assets/CarouselMoc/ong2.svg';
import ong3 from '../../assets/CarouselMoc/ong3.svg';
import ong4 from '../../assets/CarouselMoc/ong4.svg';
import ong5 from '../../assets/CarouselMoc/ong5.svg';
import ong6 from '../../assets/CarouselMoc/ong6.svg';
import ong7 from '../../assets/CarouselMoc/ong7.svg';
import ong8 from '../../assets/CarouselMoc/ong8.svg';

// Array dos logos das ONGs
const ongs = [ong1, ong2, ong3, ong4, ong5, ong6, ong7, ong8];

// Estilos para o slide e as imagens
const slideStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
const imageStyle = "cursor-pointer h-auto sm:h-32 max-w-[80%] mx-auto py-16"

function OngCarousel() {
    return (
    
    <section
    className="p-14 relative"
    style={{
        backgroundImage: `url(${bannerCarousel})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >

        <div className="text-center text-4xl font-inter font-bold">
            Nossas Ongs
            <img src={dividingLine} alt="Dividing line" className="sm:w-40 mx-auto mt-4"/>
        </div>
        
        <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        >

            <SwiperSlide>
                <div className={slideStyle}>
                    {ongs.map((logo, index) => (
                        <img key={index} src={logo} alt={`ONG ${index + 1}`} className={imageStyle}/>
                    ))}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={slideStyle}>
                    {ongs.map((logo, index) => (
                        <img key={index} src={logo} alt={`ONG ${index + 1}`} className={imageStyle}/>
                    ))}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={slideStyle}>
                    {ongs.map((logo, index) => (
                        <img key={index} src={logo} alt={`ONG ${index + 1}`} className={imageStyle}/>
                    ))}
                </div>
            </SwiperSlide>

        </Swiper>

    </section>

    );
}

export default OngCarousel;
