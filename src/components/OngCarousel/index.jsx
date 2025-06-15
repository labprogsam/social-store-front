
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerCarousel from '../../assets/CarouselMoc/bannerCarousel.svg';
import ong1 from '../../assets/CarouselMoc/ong1.svg';
import ong2 from '../../assets/CarouselMoc/ong2.svg';
import ong3 from '../../assets/CarouselMoc/ong3.svg';
import ong4 from '../../assets/CarouselMoc/ong4.svg';
import ong5 from '../../assets/CarouselMoc/ong5.svg';
import ong6 from '../../assets/CarouselMoc/ong6.svg';
import ong7 from '../../assets/CarouselMoc/ong7.svg';
import ong8 from '../../assets/CarouselMoc/ong8.svg';

const ongs = [ong1, ong2, ong3, ong4, ong5, ong6, ong7, ong8];


function OngCarousel() {
    return (
    <section className="relative w-full">
        <img src={bannerCarousel} alt="Banner Carousel" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full px-10"
            >
                
                <SwiperSlide>
                    <div className="grid grid-cols-4 gap-4 p-16">
                        {ongs.map((logo, index) => (
                            <img key={index} src={logo} alt={`ONG ${index + 1}`} className="h-24 object-contain mx-auto" />
                        ))}
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="text-center text-2xl">Slide Teste</div>
                </SwiperSlide>

            </Swiper>
        </div>
    </section>
    );
}

export default OngCarousel;
