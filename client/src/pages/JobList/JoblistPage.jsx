/* eslint-disable react/prop-types */
import { Footer, NavbarNew } from "../../components";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ShuffleSortTable from "./JobListTable";
import frontendimg from "../../assets/frontend.jpg";
import backendimg from "../../assets/backend.jpg";
import fullstackimg from "../../assets/fullstack.jpg";
import UIimg from "../../assets/UI.jpg";


const JoblistPage = () => {

    return (
        <>
            <NavbarNew />

            <h2 className="text-center mt-6 lg:mt-12">Job List categories</h2>
            <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
                    <Card
                    heading="Frontend"
                    description="See our full display of Frontend job applications"
                    imgSrc={frontendimg}
                    />
                    <Card
                    heading="Backend"
                    description="See our full display of Backend job applications"
                    imgSrc={backendimg}
                    />
                    <Card
                    heading="Full-Stack"
                    description="See our full display of Full-Stack job applications"
                    imgSrc={fullstackimg}
                    />
                    <Card
                    heading="Web Dev & UI"
                    description="See our full display of Web Development UI job applications"
                    imgSrc={UIimg}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-center mt-16 mb-4">JobList Overview</h3>
                <ShuffleSortTable />
            </div>    

            <Footer />
        </>
    );

};

//
const Card = ({ heading, description, imgSrc }) => {

    return (
        <motion.div
            transition={{
            staggerChildren: 0.035,
            }}
            whileHover="hover"
            className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
        >
            <div
            className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
            <div className="p-4 relative z-20 h-full text-white group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
                <div className="flex flex-col">
                    <h4>
                        {heading.split("").map((l, i) => (
                            <ShiftLetter letter={l} key={i} />
                        ))}
                    </h4>
                    <p className="bg-indigo-500 p-1 max-w-[460px] rounded-md group-hover:bg-opacity-50">{description}</p>
                </div>
            </div>
        </motion.div>
        );
};

//
const ShiftLetter = ({ letter }) => {

    return (
        <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
            <motion.span
            className="flex flex-col min-w-[4px]"
            style={{
                y: "0%",
            }}
            variants={{
                hover: {
                y: "-50%",
                },
            }}
            transition={{
                duration: 0.5,
            }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );

};


export default JoblistPage;
