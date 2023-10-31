import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'

const ClientSay = () => {
    return (
        <div className="container mt-[120px]">
            <p className='uppercase tracking-widest text-[#F25714] text-center'>What Clients Say</p>
            <h2 className="text-[55px] font-bold text-center">Testimonial</h2>
            <div>
                <div className='bg-[#222222] p-8 rounded-lg'>
                    <img className='mb-5' src={img1} alt="" />
                    <h6 className='text-[#F25714] font-medium uppercase mb-3'>Biobuilding Resource</h6>
                    <h3 className='text-3xl font-bold mb-2'>Scott Mortensen</h3>
                    <p>Clinical Director</p>
                </div>
            </div>
        </div>
    );
};

export default ClientSay;