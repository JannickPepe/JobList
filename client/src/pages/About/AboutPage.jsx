import { Footer, NavbarNew } from "../../components";
import TechnicalCards from "./TechnicalCards";
import WhoIsBehind from "./WhoIsBehind";


const AboutPage = () => {

    return (
        <>
            <NavbarNew />
            <div className="bg-black">
                <div className="mx-auto max-w-5xl text-center pt-10 pb-6">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        About us
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl">
                        What makes Job List such a great tailored experience
                    </h2>
                    <p className="mx-auto mt-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Our templates allow for maximum customization. No technical skills required – our intuitive design tools
                        let you get the job done easily.
                    </p>
                </div>

                <TechnicalCards />
            
                <div className="mt-14">
                    <h3 className="text-center text-slate-200">Who IS Behind JobList</h3>
                    <WhoIsBehind />    
                </div>

            </div>

            <Footer />
        </>
    );

};

export default AboutPage;
