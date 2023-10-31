import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import { BsChatQuote } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ClientSay = () => {
    return (
        <div className="container mt-[120px]">
            <p className='uppercase tracking-widest text-[#F25714] text-center'>What Clients Say</p>
            <h2 className="text-[55px] font-bold text-center mb-10">Testimonial</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#222222] p-8 pb-14 rounded-lg'>
                            <img className='mb-5' src={img1} alt="" />
                            <h6 className='text-[#F25714] font-medium uppercase mb-3'>Biobuilding Resource</h6>
                            <h3 className='text-3xl font-bold mb-2'>Scott Mortensen</h3>
                            <p>Clinical Director</p>
                        </div>
                        <div className='w-28 h-1 bg-[#e9e9e949]'></div>
                        <div className=''>
                            <BsChatQuote className='text-9xl mb-5 text-[#A5A7AB]' />
                            <div className='bg-[#222222] p-8 rounded-md'>
                                <div className='flex items-center justify-between '>
                                    <div>
                                        <h2 className='font-medium text-3xl mb-2'>Website Development</h2>
                                        <p className='text-[#a7a7a7] font-bold'>Fiverr - Jun 4, 2021 - Feb 1, 2021</p>
                                    </div>
                                    <div className='flex items-center text-xs gap-1'>
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                    </div>
                                </div>
                                <div className='w-full h-[1px] my-5 bg-[#e9e9e949]'></div>
                                <p className='text-lg text-[#a7a7a7]'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, <br /> recusandae perferendis? Quos nihil tempore cumque perspiciatis <br /> voluptatem asperiores dolores, est sint ex tenetur eum sapiente <br /> perferendis facilis quasi sequi amet. Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Totam, incidunt!</q></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#222222] p-8 pb-14 rounded-lg'>
                            <img className='mb-5' src={img1} alt="" />
                            <h6 className='text-[#F25714] font-medium uppercase mb-3'>Biobuilding Resource</h6>
                            <h3 className='text-3xl font-bold mb-2'>Scott Mortensen</h3>
                            <p>Clinical Director</p>
                        </div>
                        <div className='w-28 h-1 bg-[#e9e9e949]'></div>
                        <div className=''>
                            <BsChatQuote className='text-9xl mb-5 text-[#A5A7AB]' />
                            <div className='bg-[#222222] p-8 rounded-md'>
                                <div className='flex items-center justify-between '>
                                    <div>
                                        <h2 className='font-medium text-3xl mb-2'>Website Development</h2>
                                        <p className='text-[#a7a7a7] font-bold'>Fiverr - Jun 4, 2021 - Feb 1, 2021</p>
                                    </div>
                                    <div className='flex items-center text-xs gap-1'>
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                    </div>
                                </div>
                                <div className='w-full h-[1px] my-5 bg-[#e9e9e949]'></div>
                                <p className='text-lg text-[#a7a7a7]'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, <br /> recusandae perferendis? Quos nihil tempore cumque perspiciatis <br /> voluptatem asperiores dolores, est sint ex tenetur eum sapiente <br /> perferendis facilis quasi sequi amet. Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Totam, incidunt!</q></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#222222] p-8 pb-14 rounded-lg'>
                            <img className='mb-5' src={img1} alt="" />
                            <h6 className='text-[#F25714] font-medium uppercase mb-3'>Biobuilding Resource</h6>
                            <h3 className='text-3xl font-bold mb-2'>Scott Mortensen</h3>
                            <p>Clinical Director</p>
                        </div>
                        <div className='w-28 h-1 bg-[#e9e9e949]'></div>
                        <div className=''>
                            <BsChatQuote className='text-9xl mb-5 text-[#A5A7AB]' />
                            <div className='bg-[#222222] p-8 rounded-md'>
                                <div className='flex items-center justify-between '>
                                    <div>
                                        <h2 className='font-medium text-3xl mb-2'>Website Development</h2>
                                        <p className='text-[#a7a7a7] font-bold'>Fiverr - Jun 4, 2021 - Feb 1, 2021</p>
                                    </div>
                                    <div className='flex items-center text-xs gap-1'>
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                        <AiFillStar className='text-yellow-400' />
                                    </div>
                                </div>
                                <div className='w-full h-[1px] my-5 bg-[#e9e9e949]'></div>
                                <p className='text-lg text-[#a7a7a7]'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, <br /> recusandae perferendis? Quos nihil tempore cumque perspiciatis <br /> voluptatem asperiores dolores, est sint ex tenetur eum sapiente <br /> perferendis facilis quasi sequi amet. Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Totam, incidunt!</q></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div >
    );
};

export default ClientSay;