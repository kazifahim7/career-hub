import { NavLink } from 'react-router-dom';
import user from '../../../public/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img src={user} className=" w-full lg:w-1/2   rounded-lg " />

                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span className='bg-gradient-to-r from-orange-700 via-blue-500 bg-300%  to-green-400 text-transparent bg-clip-text animate-gradient'> Dream Job</span> </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <NavLink className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-black capitalize">Get start</span>
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;