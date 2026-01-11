import Banner from "../Components/home/Banner";
import Footer from "../Components/home/Footer";
import Navbar from "../Components/home/Navbar";

export default function Example() {
    return (
        <>
            <Banner/>
            <Navbar/>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
            <section className='relative bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20 pt-40'>
                
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-orange-500/35 rounded-full blur-[200px]'></div>
                
                <div className='text-center md:text-left mt-12'>
                    <div className="flex items-center  p-1.5 rounded-full border border-orange-900 text-xs w-fit mx-auto md:mx-0">
                        <div className="flex items-center">
                            <img className="size-7 rounded-full border border-orange-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-7 rounded-full border border-orange-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-7 rounded-full border border-orange-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                        </div>
                        <p className="-translate-x-2 text-xs text-slate-200">Join community of 1m+ founders </p>
                    </div>
                    <h1 className='font-medium text-3xl md:text-5xl/15 bg-linear-to-r from-white to-orange-300 bg-clip-text text-transparent max-w-117.5 mt-4'>Ready to create meaningful impact for underprivileged lives?</h1>
                    <p className='text-sm/6 text-white max-w-86.25 mt-4 mx-auto md:mx-0'>Together, we can turn compassion into measurable change.</p> 
                </div>
                        
                <div className='w-full max-w-lg bg-[#FB923C]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8'>
                    <form action='https://formspree.io/f/manoozep' method="POST" className='space-y-6'>
                        <div>
                            <label className='block text-white text-sm mb-2'>Name</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                placeholder="Eden Johnson" 
                                className='w-full bg-[#FB923C]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-orange-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                placeholder="Eden@example.com" 
                                className='w-full bg-[#FB923C]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-orange-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Message</label>
                            <textarea 
                                name="message"
                                placeholder="Write your message here..." 
                                rows="4"
                                required
                                className='w-full bg-[#FB923C]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-orange-600 transition resize-none'
                            ></textarea>
                        </div>
            
                        <div className='flex items-center justify-between'>
                            <p className='text-xs md:text-sm text-white/60 max-w-3xs'>
                                By submitting, you agree to our <span className='text-white'>Terms</span> and <span className='text-white'>Privacy Policy</span>.
                            </p>
                            <button type="submit" className='bg-linear-to-r from-orange-950 to-orange-600 hover:from-orange-600 hover:to-orange-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
            
        </>
    );
};