
import {  FeatureSection, Footer, HeroSection, NavbarNew, Pricing, Testimonials, Workflow } from '../components';


const Landing = () => {

    return (
        <>
            <NavbarNew />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Pricing />
                <Testimonials />
                <Footer />
            </div>
        </>
    );

};

export default Landing;