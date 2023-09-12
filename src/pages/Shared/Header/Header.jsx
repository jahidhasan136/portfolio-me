import { FaBars, FaTimesCircle } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);

    }
    return (
        <>
            <div className='container'>
                <div className='flex justify-between items-center pt-10'>
                    <a href="/">
                        <h1 className='font-bold text-4xl z-20'>Jahid Hasan</h1>
                    </a>
                    <div className='md:flex gap-10 text-base lg:text-xl z-10 font-medium hidden'>
                        <a href="/" className='transition-all hover:text-[#F25714] duration-500'>About</a>
                        <a href="/" className='transition-all hover:text-[#F25714] duration-500'>Projects</a>
                        <a href="/" className='transition-all hover:text-[#F25714] duration-500'>Services</a>
                        <a href="/" className='transition-all hover:text-[#F25714] duration-500'>Contact</a>
                    </div>
                    <div className='md:hidden' onClick={handleClick}>
                        <FaBars className='text-[26px]'></FaBars>
                    </div>
                </div>
            </div>

            {/* mobile device */}

            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
                <div className="logo mb-[30px]">
                    <a href="/">
                        <img className='w-3/4' src="" alt="" />
                    </a>
                </div>
                <ul className="space-y-[15px] text-[16px] font-bold text-white mb-[20px]">
                    <li><a href='/' className='transition text-white'>Home</a></li>
                    <li><a href='/' className='transition text-white'>About</a></li>
                    <li><a href='/' className='transition text-white'>Features</a></li>
                    <li><a href='/' className='transition text-white'>Service</a></li>
                    <li><a href='/' className='transition text-white'>Pricing</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;