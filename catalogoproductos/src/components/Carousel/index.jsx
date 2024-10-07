// Import Swiper React component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

const Carousel = ({data}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      virtual
    >
      {data.map((elem, index) => {
        <SwiperSlide key={elem} virtualIndex={index}>
            <img src={elem.image}/>
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default Carousel;