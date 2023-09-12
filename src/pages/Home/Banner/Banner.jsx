import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';
import bannerImg from './images/jahid.png'
import react from './images/react-js.svg'
import next from './images/next-js.svg'
import js from './images/js.svg'

const Banner = () => {
    return (
        <div className="pt-[100px] container">
            <div className='flex items-center justify-between'>
                <div>
                    <p className='uppercase tracking-widest text-[#F25714]'>Let&apos;s build your Website</p>
                    <h2 className="text-[45px] font-bold leading-[75px]">
                        Hi, This is <span className='text-[#F25714] italic font-serif'>Jahid Hasan</span>
                    </h2>
                    <h2 className='text-[45px] font-bold'>
                        I&apos;m a Web Developer
                    </h2>
                    <p className='mt-6 text-lg text-[#a7a7a7] w-4/6'>
                        Since 2022, I have helped over 100 clients worldwide, including companies and business owners, with website development, web design, ui/ux design and logo design.
                    </p>
                    <div className='mt-4 flex items-center gap-20'>
                        <div>
                            <p className='uppercase font-semibold'>find with me</p>
                            <div className='flex gap-5 mt-3'>
                                <a className='bg-[#222222] hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                    <FaFacebookF></FaFacebookF>
                                </a>
                                <a className='bg-[#222222] hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                    <FaLinkedinIn></FaLinkedinIn>
                                </a>
                                <a className='bg-[#222222] hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                    <TbMail></TbMail>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase font-semibold'>Best Skill on</p>
                            <div className='flex gap-5 mt-3'>
                                <div className='bg-[#222222] p-4 rounded-md text-white'>
                                    <img className='w-[20px]' src={react} alt="" />
                                </div>
                                <div className='bg-[#222222] p-4 text-xl rounded-md text-white'>
                                    <img className='w-[20px]' src={next} alt="" />
                                </div>
                                <div className='bg-[#222222]  text-xl rounded-md text-white p-4'>
                                    <img className='w-[20px]' src={js} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='h-[500px] object-contain img' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;