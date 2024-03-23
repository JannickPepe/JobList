import { useRef } from 'react';
import {  FeatureSection, Footer, HeroSection, NavbarNew, Pricing, Testimonials, Workflow } from '../components';


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
            <nav className='sticky top-16 bg-orange-700' style={{zIndex:99}}>
                <ul className="grid lg:grid-flow-col text-center border-b border-gray-200 text-white">
                    <li>
                        <a onClick={handleClickHero} href="#page1" className="flex justify-center border-b-4 border-transparent hover:text-slate-900 hover:border-yellow-500 py-4">
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickFeat} href="#page2" className="flex justify-center border-b-4 border-transparent hover:text-slate-900 hover:border-yellow-500 py-4">
                            Features
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickkWork} href="#page3" className="flex justify-center border-b-4 border-transparent hover:text-slate-900 hover:border-yellow-500 py-4">
                            Workflow
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickPrice} href="#page4" className="flex justify-center border-b-4 border-transparent hover:text-slate-900 hover:border-yellow-500 py-4">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickTesti} href="#page5" className="flex justify-center border-b-4 border-transparent hover:text-slate-900 hover:border-yellow-500 py-4">
                            Testimonials
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <div ref={refhero}>
                    <HeroSection />
                </div>
                <div ref={reffeat}>
                    <FeatureSection />
                </div>
                <div ref={refwork}>
                    <Workflow />
                </div>
                <div ref={refprice} >
                    <Pricing />
                </div>
                <div ref={reftesti}>
                    <Testimonials />
                </div>
                <Footer />
            </div>
        </>
    );

};

export default Landing;