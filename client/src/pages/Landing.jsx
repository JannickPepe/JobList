import { useRef, } from 'react';
import {  FeatureSection, Footer, NavbarNew, Testimonials, Workflow, AuroraHero, SquishyCard } from '../components';
import Background from '../components/Landing/MoleculeBackground';



const Landing = () => {

    const refhero = useRef(null);
    const handleClickHero = () => {
        refhero.current?.scrollIntoView({behavior: 'smooth'});
    };
    const reffeat = useRef(null);
    const handleClickFeat = () => {
        reffeat.current?.scrollIntoView({behavior: 'smooth'});
    };
    const refwork = useRef(null);
    const handleClickkWork = () => {
        refwork.current?.scrollIntoView({behavior: 'smooth'});
    };
    const refprice = useRef(null);
    const handleClickPrice = () => {
        refprice.current?.scrollIntoView({behavior: 'smooth'});
    };
    const reftesti = useRef(null);
    const handleClickTesti = () => {
        reftesti.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <>
            <NavbarNew />
            <nav className='hidden md:block sticky top-16 bg-violet-400' style={{zIndex:99}}>
                <ul className="grid lg:grid-flow-col text-sm font-semibold text-center text-white">
                    <li>
                        <a onClick={handleClickHero} href="#page1" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-500 py-2">
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickFeat} href="#page2" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-500 py-2">
                            Features
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickkWork} href="#page3" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-500 py-2">
                            Workflow
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickPrice} href="#page4" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-500 py-2">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickTesti} href="#page5" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-500 py-2">
                            Testimonials
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="">
                <div ref={refhero}>
                    <AuroraHero />
                    {/*
                    <HeroSection />
                     */}
                </div>
                <div className="max-w-[85rem] mx-auto pt-10 lg:px-6">
                    <div ref={reffeat}>
                        <FeatureSection />
                    </div>
                    <div ref={refwork}>
                        <Workflow />
                    </div>
                    <div ref={refprice} >
                        {/*
                        <Pricing />
                         */}
                        <SquishyCard />
                    </div>
                    <span className="mx-auto flex justify-center items-center max-w-[100px] bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                        Reviews
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:mt-10 tracking-wide">
                        What are{" "}
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
                        People Saying
                        </span>
                    </h2>
                    <div className="relative bg-gray-900 mt-10 lg:mt-10 rounded-md">
                        <Background />
                        {/* Your content here */}
                        <div className='py-4 px-4' ref={reftesti}>
                            <Testimonials />
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        </>
    );

};

export default Landing;