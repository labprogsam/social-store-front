
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ong1 from '../../assets/CarouselMoc/ong1.svg';
import ong2 from '../../assets/CarouselMoc/ong2.svg';
import ong3 from '../../assets/CarouselMoc/ong3.svg';
import ong4 from '../../assets/CarouselMoc/ong4.svg';
import ong5 from '../../assets/CarouselMoc/ong5.svg';
import ong6 from '../../assets/CarouselMoc/ong6.svg';
import ong7 from '../../assets/CarouselMoc/ong7.svg';
import ong8 from '../../assets/CarouselMoc/ong8.svg';
import dividingLine from '../../assets/CarouselMoc/dividingLine.svg';
import bannerCarousel from '../../assets/CarouselMoc/bannerCarousel.svg';

const ongs = [
    ong1,
    ong2,
    ong3, 
    ong4,
    ong5,
    ong6,
    ong7,
    ong8
];

const slideStyle = "grid grid-cols-2 lg:grid-cols-4 gap-y-16 px-[4%]"
const imageStyle = "cursor-pointer h-60 mx-auto"

function OngCarousel() {
    return (

    <section
    className="pt-16 pb-28 relative"
    style={{
        backgroundImage: `url(${bannerCarousel})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >

        <div className="text-center text-6xl font-bold mt-2 mb-16">
            <b>Nossas Ongs</b>
            <img src={dividingLine} alt="Dividing line" className="mx-auto mt-4"/>
        </div>
        
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className=""
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
