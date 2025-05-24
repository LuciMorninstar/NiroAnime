import Slide from "../components/Slide"
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Hero = () => {
  return (
     <>
     <div className = " w-full fixed  py-3 px-4 h-[430px]">
      <Swiper className =" mySwiper w-[full] h-[400px] rounded-sm "
    
      loop={true}
                  modules={[Autoplay,Pagination,Navigation]}
                  speed={1000} // transition speed in ms (1000 = 1s)
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ dynamicBullets: true, clickable: true }}
                  navigation={true}

                spaceBetween={10}
                slidesPerView={1}
                autoHeight={true}
          >
      

          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>
          <SwiperSlide> <Slide/></SwiperSlide>


       
      
      </Swiper>
      
      </div>
    </>
  )
}

export default Hero