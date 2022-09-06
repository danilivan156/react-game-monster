import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Thumbs, Autoplay } from "swiper";
import BigSlider from '../../../Components/Sliders/HomeSlider/BigSlider';

const HomeSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <section className="main-slider">
            <div className="main-slider__left" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                <img className="main-slider__absolute" src="img/top-slider-left-a.png" alt="" />
                <img src="img/top-slider-left.png" alt="" />
                <h2>Страшные скидки
                <br/>в честь открытия
                </h2>
            </div>
            <div className="main-slider__right" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                <Swiper
                    spaceBetween={500}
                    loop={true}
                    allowTouchMove={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[ Thumbs, Autoplay ]}
                    className="mySwiper"
                    speed={1000}
                    autoplay={{
                        reverseDirection: true,
                        delay: 5000,
                        disableOnInteraction: true
                    }}
                >
                    <SwiperSlide>
                        <BigSlider title="Witcher 1: Wild Hunt" priceMain={800} priceOld={1600}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BigSlider title="Witcher 2: Wild Hunt" priceMain={600} priceOld={1600}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BigSlider title="Witcher 3: Wild Hunt" priceMain={900} priceOld={1600}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BigSlider title="Witcher 4: Wild Hunt" priceMain={1100} priceOld={1600}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BigSlider title="Witcher 5: Wild Hunt" priceMain={1300} priceOld={1600}/>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={5}
                    allowTouchMove={false}
                    modules={[Thumbs]}
                    className="mySwiper-1"
                >
                    <SwiperSlide>
                        <img src="img/top-slider/Union.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/top-slider/Union (1).png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/top-slider/Union (2).png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/top-slider/Union (3).png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/katalog/knVdI0VF54j3BCIEr5VGAw.jpeg" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default HomeSlider
