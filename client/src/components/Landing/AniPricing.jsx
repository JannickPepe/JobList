import { motion } from "framer-motion";
import { pricingOptions } from "../../constants";
import { CheckCircle2 } from "lucide-react";


// Main Const
const SquishyCard = () => {

    return (
        <section className="px-4 py-12">
            <div className="text-center mt-20 mb-8">
                <h3>Pricing List</h3>
                <h5 className="mt-2 text-base font-normal">Different tiers to choose from!</h5>
            </div>
            <div className="mx-auto w-fit">
                <Card />
            </div>
        </section>
    );

};


// Component const
const Card = () => {

    return (
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-6 lg:gap-10">
            {pricingOptions.map((option, index) => (
                <motion.div
                key={index}
                whileHover="hover"
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                variants={{
                    hover: {
                    scale: 1.05,
                    },
                }}
                className="relative min-h-[500px] w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-6"
                >
                    <div className="relative z-10 text-white">
                        <span className="mb-3 block w-fit rounded-full bg-white px-4 py-1 text-sm font-light text-white">
                        <p className="text-black text-4xl mb-3">
                                {option.title}
                                {option.title === "Pro" && (
                                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                    (Most Popular)
                                </span>
                                )}
                            </p>
                        </span>
                        <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                            scale: 1,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                        }}
                        className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                        >
                        <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                        </motion.span>
                        <ul>
                                {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                                ))}
                            </ul>
                    </div>
                    <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                        Get it now
                    </button>
                    <Background />
                </motion.div>
            ))}
        </div>
    
    );

};

// Component const
const Background = () => {

    return (
        <motion.svg
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        variants={{
            hover: {
            scale: 1.5,
            },
        }}
        transition={{
            duration: 1,
            ease: "backInOut",
        }}
        >
        <motion.circle
            variants={{
            hover: {
                scaleY: 0.5,
                y: -25,
            },
            }}
            transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
            }}
            cx="160.5"
            cy="114.5"
            r="101.5"
            fill="#262626"
        />
        <motion.ellipse
            variants={{
            hover: {
                scaleY: 2.25,
                y: -25,
            },
            }}
            transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
            }}
            cx="160.5"
            cy="265.5"
            rx="101.5"
            ry="43.5"
            fill="#262626"
        />
        </motion.svg>
    );

};

export default SquishyCard;