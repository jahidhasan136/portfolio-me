import webDevelopment from './images/web_development.svg'
import webDesign from './images/web-design.svg'
import logoDesign from './images/logo-design.svg'
import uiUx from './images/ui-ux.svg'

const Services = () => {
    return (
        <div className="container mt-[120px]">
            <h2 className='text-[55px] font-bold italic mb-20'>My Services</h2>
            <div className='grid grid-cols-3 gap-10'>
                <div className='bg-[#222222] px-5 py-10 rounded-lg'>
                    <img className='mb-5' src={webDevelopment} alt="" />
                    <h3 className='text-2xl font-bold mb-3'>Web Development</h3>
                    <p className='text-[#a7a7a7]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic.
                    </p>
                </div>
                <div className='bg-[#222222] px-5 py-10 rounded-lg'>
                    <img className='mb-5' src={webDevelopment} alt="" />
                    <h3 className='text-2xl font-bold mb-3'>Web Development</h3>
                    <p className='text-[#a7a7a7]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic.
                    </p>
                </div>
                <div className='bg-[#222222] px-5 py-10 rounded-lg'>
                    <img className='mb-5' src={webDevelopment} alt="" />
                    <h3 className='text-2xl font-bold mb-3'>Web Development</h3>
                    <p className='text-[#a7a7a7]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;