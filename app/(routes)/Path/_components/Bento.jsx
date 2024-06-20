"use client";
import { cn } from "@/lib/utils";
import React from "react";
// import Timer from '@/../public/timer.svg'
import { BentoGrid, BentoGridItem } from "@/app/(routes)/Path/_components/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGridThirdDemo() {
    return (

        <BentoGrid className=" w-full md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <>
                
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)+" relative"}
                        icon={item.icon}
                        linkk={item.link}
                    />
                    {/* <a href={item.link}>Start Now</a> */}
                </>
            ))}
        </BentoGrid >
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-400 border-white/[0.2] p-2  items-center space-x-2 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="h-4 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 border-white/[0.2] p-2 items-center space-x-2 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2 "
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border border-gray-300 p-2  items-center space-x-2  bg-gray-700 w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};
const SkeletonNew = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
        >
            <svg
                fill="#b75690" className="flex justify-center mx-auto items-center align-middle  mt-6 " height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512" >
                <g>
                    <g>
                        <g>
                            <path d="M276.193,58.507V40.389h14.578c11.153,0,20.194-9.042,20.194-20.194S301.923,0,290.771,0h-69.544
				c-11.153,0-20.194,9.042-20.194,20.194s9.042,20.194,20.194,20.194h14.578v18.118C119.952,68.76,28.799,166.327,28.799,284.799
				C28.799,410.078,130.721,512,256,512s227.201-101.922,227.201-227.201C483.2,166.327,392.046,68.76,276.193,58.507z
				 M276.193,470.516v-20.124c0-11.153-9.042-20.194-20.194-20.194c-11.153,0-20.194,9.042-20.194,20.194v20.124
				c-86.91-9.385-156.137-78.614-165.522-165.522h20.124c11.153,0,20.194-9.042,20.194-20.194s-9.042-20.194-20.194-20.194H70.282
				c9.385-86.91,78.614-156.137,165.522-165.523v20.124c0,11.153,9.042,20.194,20.194,20.194c11.153,0,20.194-9.042,20.194-20.194
				V99.081c86.91,9.385,156.137,78.614,165.522,165.523h-20.124c-11.153,0-20.194,9.042-20.194,20.194s9.042,20.194,20.194,20.194
				h20.126C432.331,391.903,363.103,461.132,276.193,470.516z"/>
                            <path d="M317.248,194.99l-58.179,58.18c-1.011-0.097-2.034-0.151-3.071-0.151c-17.552,0-31.779,14.229-31.779,31.779
				c0,17.552,14.228,31.779,31.779,31.779s31.779-14.229,31.779-31.779c0-1.037-0.054-2.06-0.151-3.07l58.178-58.18
				c7.887-7.885,7.887-20.672,0-28.559C337.922,187.103,325.135,187.103,317.248,194.99z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </motion.div>
    );
};

const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-white p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
            >
                <p className="text-xs text-neutral-100">Our new slogan </p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 border-white/[0.2] p-2  items-start space-x-2 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 flex-shrink-0" />
                <p className="text-sm text-neutral-100">
                    We take breaks so you don&apos;t have to!
                </p>
            </motion.div>

        </motion.div>
    );
};
const items = [
    {
        title: "Pitching Ability",
        description: (
            <span className="text-sm">
                Clearly conveying ideas and persuading stakeholders effectively.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        link: "/Dashboard"
    },
    {
        title: "Sales & Marketing",
        description: (
            <span className="text-sm">
                Effectively promoting products and services to attract and retain customers.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        link: "/Sale"
    },
    {
        title: "Stragetic Thinking",
        description: (
            <span className="text-sm">
                Planning long-term strategies to achieve business objectives and success.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        link: "/Stra"
    },
    {
        title: "Time Management",
        description: (
            <span className="text-sm">
                Prioritizing tasks and managing time to maximize productivity.
            </span>
        ),
        header: <SkeletonNew />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        link: "/Time"
    },


    {
        title: "Leadership",
        description: (
            <span className="text-sm">
                Inspiring and guiding a team towards achieving business goals.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        link: "/Lead"
    },
];
