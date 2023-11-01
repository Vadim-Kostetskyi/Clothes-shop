import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const CoreSwiper = () => {
  return (
    <Swiper
      modules={[Navigation]}
      autoHeight={true}
      slidesPerView={1}
      rewind={true}
      navigation
      loop={true}
    >
    </Swiper>
  );
};

export default CoreSwiper;