import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";


const TechnicalCards = () => {

    return (
        <div className="px-4 py-12">
            <ShimmerBorderCard />
        </div>
    );

};

const ShimmerBorderCard = () => {

    return (
        <div className="lg:grid grid-cols-3 grid-rows-1 max-w-[1268px] mx-auto space-y-4 lg:space-y-0">

            <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
                <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                    <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

                    <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                        Customizable
                    </h4>
                    <p className="relative z-10 text-slate-400">
                        Tailor your landing pages look and feel, from the color scheme to the font size, to the design of the page.
                    </p>
                </div>

                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    style={{ scale: 1.75 }}
                    transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
            </div>

            <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
                <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                    <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

                    <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                        Fast Performance
                    </h4>
                    <p className="relative z-10 text-slate-400">
                        We build our templates for speed in mind, for super-fast load times so your customers never falls asleep.
                    </p>
                </div>

                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    style={{ scale: 1.75 }}
                    transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
            </div>

            <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
                <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                    <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

                    <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                        Fully Featured
                    </h4>
                    <p className="relative z-10 text-slate-400">
                        Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.
                    </p>
                </div>

                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    style={{ scale: 1.75 }}
                    transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
            </div>
        </div>
    );

};


export default TechnicalCards;