import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import contactImg from './images/contact1.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e54kv3j',
            'template_c43n9n8',
            form.current,
            'c6ocZbe1JbMp2lM3P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="container mt-[120px]">
            <h2 className='text-[55px] font-bold text-center mb-10'>Contact With Me</h2>
            <div className='flex items-center justify-between'>
                <div className='bg-[#222222] p-8 rounded-xl transition-all'>
                    <img className='mb-5 rounded-lg hover:scale-105 transition-all duration-500' src={contactImg} alt="" />
                    <h3 className='text-3xl font-bold mb-3'>Jahid Hasan</h3>
                    <p className='mb-2 text-lg font-medium text-[#a7a7a7]'>Web Developer & Web Designer</p>
                    <p className='text-lg mb-3'>
                        I am available for freelance work. Connect with me <br /> via and call in to my account.
                    </p>
                    <p className='mb-2 text-[#a7a7a7]'>
                        Phone: +8801873257987
                    </p>
                    <p className='text-[#a7a7a7]'>
                        Email: jh3495689@gmail.com
                    </p>
                    <div className='mt-4'>
                        <p className='uppercase font-semibold'>find with me</p>
                        <div className='flex gap-5 mt-3'>
                            <a className='bg-black hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a className='bg-black hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                <FaLinkedinIn></FaLinkedinIn>
                            </a>
                            <a className='bg-black hover:bg-[#F36714] transition-all hover:-translate-y-1 duration-500 p-4 text-xl rounded-md text-white' href="">
                                <TbMail></TbMail>
                            </a>
                        </div>
                    </div>
                </div>
                <form className='bg-[#222222] p-8 rounded-lg' ref={form} onSubmit={sendEmail}>
                    <div className='flex items-center justify-between mb-3'>
                        <div>
                            <h3 className='text-lg mb-2 text-[#a7a7a7]'>Name</h3>
                            <input className='text-black p-3 rounded-md w-[270px]' type="text" name="user_name" />
                        </div>
                        <div>
                            <h3 className='text-lg mb-2 text-[#a7a7a7]'>Phone Number</h3>
                            <input className='text-black p-3 rounded-md w-[270px]' type="text" name="user_number" id="" />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg mb-2 text-[#a7a7a7]'>Email</h3>
                        <input className='w-full text-black p-3 rounded-md' type="email" name="user_email" />
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-lg mb-2 text-[#a7a7a7]'>Subject</h3>
                        <input className='w-full text-black p-3 rounded-md' type="text" name="user_subject" />
                    </div>
                    <div className='mb-6'>
                        <h3 className='text-lg mb-2 text-[#a7a7a7]'>Message</h3>
                        <textarea cols='70' rows='8' className='w-full text-black px-3 py-2 rounded-md' name="message" />
                    </div>
                    <input className='bg-black p-3 rounded-md hover:bg-[#F25714] transition-all duration-500 flex justify-center gap-1 hover:-translate-y-1 w-full cursor-pointer' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;