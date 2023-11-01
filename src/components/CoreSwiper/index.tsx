import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const CoreSwiper = () =>
(
  <Swiper
    modules={[Navigation]}
    slidesPerView={1}
    autoHeight
    navigation
    rewind
    loop
  >
  </Swiper>
);

export default CoreSwiper;