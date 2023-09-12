import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import jahid from './images/jahid.png'
import { TbMail } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className="container mt-[120px]">
            <div className='bg-[#e9e9e949] h-[1px] mb-28'></div>
            <div className='flex justify-between'>
                <div className='grid items-center'>
                    <a href="/">
                        <img className='rounded-full w-24 h-24 object-contain border-4 border-[#222222] mb-5' src={jahid} alt="" />
                    </a>
                    <h3 className='font-bold text-3xl mb-3'>
                        Jahid Hasan
                    </h3>
                    <p className='text-[#a7a7a7]'>
                        Web Developer & Web Designer
                    </p>
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
                    <h3 className='text-xl font-bold mb-5 text-[#F25714]'>Services</h3>
                    <div className='grid gap-4 text-[#a7a7a7]'>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Web Design</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Logo Design</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Ui/Ux Design</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Web Development</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-5 text-[#F25714]'>Quick Links</h3>
                    <div className='grid gap-4 text-[#a7a7a7]'>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>About</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Contact</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Privacy Policy</a>
                        <a href='/' className='hover:text-[#F25714] transition-all duration-500'>Terms & Condition</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-3 text-[#F25714]'>Address</h3>
                    <address className='text-[#a7a7a7]'>Dogair Natun Para, Sarulia-1361</address>
                    <address className='text-[#a7a7a7] mb-3'>
                        Bangladesh, Demra-Dhaka
                    </address>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.3102465971647!2d90.47538016850785!3d23.712981534944458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b709bb85e82d%3A0x51448c1375b07ba2!2sBaitul%20Mukaddas%20Jame%20Mosjid!5e0!3m2!1sen!2sbd!4v1694455895378!5m2!1sen!2sbd" width="300" height="200" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='bg-[#e9e9e949] h-[1px] mt-28 mb-10'></div>
            <p className='flex justify-center pb-5 text-[#a7a7a7]'>&copy; 2023. All rights reserved by Jahid Hasan</p>
        </div>
    );
};

export default Footer;