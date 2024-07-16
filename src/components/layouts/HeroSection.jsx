import { heroImage } from '../../staticData/heroData';
import Button from '../elements/Button';
import { FaRegEye } from "react-icons/fa";
import { LuDonut } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { FaPenAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

const HeroSection = () => {
    return (
      <div className="my-7 md:my-0">
        <div className="text-center mb-12">
          <h1 className="md:text-6xl text-5xl md:mt-0 mt-12 font-bold text-white font-poppins">
            D<LuDonut className="inline" />
            D<FaRegEye className="inline" />
            NATS
          </h1>
          <p className="text-slate-700 font-semibold md:w-full w-3/4 mx-auto md:mt-0 mt-5">
            Sweeten your taste, sweeten your life, Enjoy your day
          </p>
          <Link to="/donuts">
            <Button addedClassname="bg-transparent border-2 border-white text-white hover:bg-amber-700 hover:text-white hover:border-none hover:scale-125 hover:font-bold">
              Order Now <TbNotes className="inline text-2xl" />
              <FaPenAlt className="inline text-lg -ml-2 -mt-2" />
            </Button>
          </Link>
        </div>
        <div className="flex mb-3">
          <Swiper
            key="swiper-container"
            spaceBetween={30}
            slidesPerView={"auto"}
            modules={[Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {heroImage.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  key={image.id}
                  className="md:flex md:justify-center md:items-center shadow-xl md:w-3/4 w-[80%] mx-auto rounded-br-[2.5rem] rounded-tl-[6rem] md:rounded-none py-6 md:py-3"
                >
                  <img
                    src={image.src}
                    alt={image.img}
                    className="md:w-1/2 inline-block"
                  />
                  <div className="md:w-1/4 md:-ml-10">
                    <h1 className="text-white font-serif font-semibold text-center my-5 text-lg">
                      {image.name}
                    </h1>
                    <p className="text-sm font-roboto text-center">{image.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default HeroSection;