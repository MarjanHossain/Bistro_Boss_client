// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
// import image//
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionHeading from '../../../component/SectionHeading';

const Category = () => {
    return (
        <section className='container'>
            {/* heading */}

            <SectionHeading
                subHeading="From 11:00am to 10:00pm"
                heading="ORDER ONLINE"
            />

            <Swiper
                slidesPerView={'5'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-3xl uppercase text-white -mt-24 text-center'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-3xl uppercase text-white -mt-24 text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-3xl uppercase text-white -mt-24 text-center'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-3xl uppercase text-white -mt-24 text-center'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-3xl uppercase text-white -mt-24 text-center'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;