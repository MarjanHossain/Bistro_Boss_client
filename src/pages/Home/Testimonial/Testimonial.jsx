import { useEffect, useState } from "react";
import SectionHeading from "../../../component/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="lg:mb-20 lg:mx-20 lg:px-10 lg:pb-20 bg-orange-100">
            <SectionHeading
                subHeading={"what our client say"}
                heading={'testimonials'}
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="space-y-2">
                            <div className="justify-center flex ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <p className="text-center text-lg lg:px-48"> {review.details}</p>
                            <h2 className="text-center text-orange-500 text-2xl font-semibold">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section >
    );
};

export default Testimonial;