import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";
import styles from "./complexButton.module.css";


const NavbarNew = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 py-3 bg-white border-b border-neutral-700/80" style={{zIndex:99}}>
      <div className="px-12 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center hover:scale-110">
              <img className="h-10 w-10 mr-1" src={logo} alt="Logo" />
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
            <Link to='/login'>
              <ShinySkeuButton />
            </Link>
            <Link to='/register'>
              <GradientShadowButton />
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
              <Link to='/login'>
                <ShinySkeuButton />
              </Link>
              <Link to='/register'>
                <GradientShadowButton />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarNew;

//
const GradientShadowButton = () => {

  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          Register
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );

};

//
const ShinySkeuButton = () => {

  const parentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
  btnRef.current.addEventListener("mouseover", () => {
      parentRef.current.style.setProperty("--size", "250px");
      parentRef.current.style.setProperty(
      "--shineColor",
      "rgba(255, 255, 255, 0.3)"
      );
  });

  btnRef.current.addEventListener("mouseleave", () => {
      parentRef.current.style.setProperty("--size", "0px");
      parentRef.current.style.setProperty(
      "--shineColor",
      "rgba(255, 255, 255, 0.0)"
      );
  });

  btnRef.current.addEventListener("mousemove", (e) => {
      parentRef.current.style.setProperty("--x", e.offsetX + "px");
      parentRef.current.style.setProperty("--y", e.offsetY + "px");
  });
  }, []);

  return (
    <div ref={parentRef} className={styles.skeuParent}>
        <button ref={btnRef} className={`overflow-hidden font-mono cursor-pointer text-white rounded px-4 py-2 
          bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#6903f6_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] 
          shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#6903f6] 
          ${styles.skeu}`}
        >
          Sign In
        </button>
    </div>
  );

};