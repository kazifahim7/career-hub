import { NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";



const Header = () => {
    const [theme, setTheme] = useState('light')


    useEffect(() => {
       





        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    const handleChange = (e) => {
        if (e.target.checked) {



            setTheme('night')

        }
        else {
            setTheme('light')

        }
    }





    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-xl font-light duration-1000 w-52">
                        <NavLink to={'/'}>Statistics</NavLink>
                        <NavLink to={'/jobs'}>Applied Jobs</NavLink>
                        <NavLink to={'/Blog'}>Blog</NavLink>
                    </ul>
                </div>
                <a className=" text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-blue-700 bg-300%  to-green-500 text-transparent bg-clip-text animate-gradient">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl font-bold  space-x-5 px-1">
                    <NavLink to={'/'}>Statistics</NavLink>
                    <NavLink to={'/jobs'}>Applied Jobs</NavLink>
                    <NavLink to={'/Blog'}>Blog</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <label className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input onChange={handleChange} type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>



                <button className="btn btn-outline btn-success">Get Start</button>








            </div>
        </div>
    );
};

export default Header;