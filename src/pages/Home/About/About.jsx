import jahid from './images/jahid.png'
import { MdOutlineFileDownload } from 'react-icons/md'

const About = () => {
    return (
        <div className='container mt-[120px]'>
            <div className='flex justify-between items-center'>
                <div className='bg-[#222222] w-1/4 rounded-lg border-[15px] border-[#222222] hover:bg-black hover:border-black duration-500 transition-all cursor-pointer'>
                    <img className='border-8 border-black hover:border-[#222222] duration-500 transition-all rounded-md' src={jahid} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='uppercase tracking-widest text-[#F25714]'>Visit my portfolio & hire me</p>
                    <h2 className='text-[45px] font-bold mb-5'>About Me</h2>
                    <h3 className='text-xl mb-3'>A Passionate Front-end Developer and Full Stack Developer</h3>
                    <p className='text-[#a7a7a7] mb-5'>
                        Hi! My name is Jahid Hasan. I&apos;m from Bangladesh. I&apos;m a Full-time professional web developer. I truely believe that your success in my reason to smile. I have great experience in React js, Next js, Redux, Javascript, HTML 5, CSS 3, Bootstrap, Material UI, Tailwind css, Front Awesome, React Router Dom, React Hook Form, MongoDB, and Firebase etc.
                    </p>
                    <button className='border border-[#F25714] p-3 rounded-md hover:bg-[#F25714] transition-all duration-500 flex items-center gap-1 hover:-translate-y-1'>Download Resume <MdOutlineFileDownload className="animate-bounce" /></button>
                </div>
            </div>
        </div>
    );
};

export default About;