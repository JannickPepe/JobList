/* eslint-disable no-unused-vars */
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {useMotionTemplate, useMotionValue, motion, animate, } from "framer-motion";
import { Link } from "react-router-dom";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import Example from "./LoginBtn";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = () => {

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
        style={{
            backgroundImage,
        }}
        className="relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-14 text-gray-200"
        >
        <div className="relative z-10 flex flex-col items-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                JobList Now Live!
            </span>
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Decrease your SaaS churn by over 90%
            </h1>
            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
                distinctio eum impedit nihil ipsum modi.
            </p>

            <div className="flex items-center gap-6 justify-center">
                <motion.button
                style={{
                    border,
                    boxShadow,
                }}
                whileHover={{
                    scale: 1.015,
                }}
                whileTap={{
                    scale: 0.985,
                }}
                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                >
                    <Link to='Register'>
                        Start free trial
                    </Link>
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
                <Example />
            </div>

            <div className="flex mt-10 justify-center max-w-7xl">
                <video autoPlay loop muted
                className="rounded-lg w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 mx-2 my-10"
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted
                className="rounded-lg w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 mx-2 my-10"
                >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>

        <div className="absolute inset-0 z-0">
            <Canvas>
                <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
        </div>
        </motion.section>
    );
};

export default AuroraHero;