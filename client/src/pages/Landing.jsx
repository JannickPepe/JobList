import { useRef, useState } from 'react';
import {  FeatureSection, Footer, NavbarNew, Testimonials, Workflow, AuroraHero, SquishyCard } from '../components';
import Background from '../components/Landing/MoleculeBackground';
import { motion, AnimatePresence } from 'framer-motion';    


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

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <>
            <NavbarNew />
            <nav className='sticky top-16 bg-violet-700' style={{zIndex:99}}>
                <ul className="grid lg:grid-flow-col text-center border-b border-gray-200 text-white">
                    <li>
                        <a onClick={handleClickHero} href="#page1" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-300 py-4">
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickFeat} href="#page2" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-300 py-4">
                            Features
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickkWork} href="#page3" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-300 py-4">
                            Workflow
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickPrice} href="#page4" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-300 py-4">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickTesti} href="#page5" className="flex justify-center border-b-4 border-transparent hover:text-black hover:font-semibold hover:border-indigo-300 py-4">
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
                <div className="max-w-7xl mx-auto pt-10 px-6">
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
                    <div className="relative bg-gray-900 mt-10 lg:mt-20">
                        <Background />
                        {/* Your content here */}
                        <div className='py-4 px-4' ref={reftesti}>
                            <Testimonials />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-20">
                        <button onClick={toggleVisibility} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Toggle Visibility
                        </button>
                        <AnimatePresence>
                            {isVisible && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="bg-green-500 w-32 h-32 flex justify-center items-center text-white font-bold rounded"
                            >
                                Figure
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                
                <Footer />
            </div>
        </>
    );

};

export default Landing;