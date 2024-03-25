import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";

const NavbarNew = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 py-3 bg-white border-b border-neutral-700/80" style={{zIndex:99}}>
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center hover:scale-110">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">JobList</span>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li className="hover:scale-110" key={index}>
                <a className="text-base font-semibold hover:text-violet-800" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to='/login' className="py-2 px-3 border rounded-md font-semibold">
              Sign / Demo
            </Link>
            <Link to='/register' className="text-white font-semibold bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md" >
              Register today
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 text-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to='/login' className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link to='/register' className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Register today
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarNew;
