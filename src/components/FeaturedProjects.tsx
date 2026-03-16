import { ArrowRightIcon, GithubIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Project = {
    title: string;
    description: ReactNode;
    tech: string[];
    image: string;
    link: string;
    github: string;
    demo: string;
    date: string;
    category: string;
    tags: string[];
    isFeatured: boolean;
}

const PROJECT: Array<Project> = [
    {
        title: "TonKombat – Telegram Mini Game (Active project)",
        description: (
            <ul className="list-disc list-inside">
                <p className="text-gray-400">React-based Telegram mini app serving 30+ thousands of active users</p>
                <li>Joined mid-development to expand gameplay features for a React-based web game serving tens of
                    thousands of active users.</li>
                <li>Built reusable UI components and managed client-side data fetching and caching using TanStack
                    React Query, while using Zustand for global UI state management.</li>
                <li>Implemented gameplay logic including combat mechanics, dungeon and arena systems.</li>
                <li>Developed character equipment system allowing users to equip items and customize character
                    appearance.</li>
                <li>Built UI animations and visual effects for equipment and gameplay interactions.</li>
                <li>Optimized rendering performance and state updates for smoother gameplay experience.</li>
                <li>Accessible directly via Telegram: https://t.me/Ton_kombat_bot/app</li>
            </ul>
        ),
        tech: ["ReactJS", "TailwindCSS", "Radix UI", "TypeScript", "TanStack React Query", "Zustand", "Telegram Mini App", "useSprings"],
        image: "https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg",
        link: "https://www.google.com",
        github: "https://www.github.com",
        demo: "https://www.demo.com",
        date: "2021-01-01",
        category: "Web",
        tags: ["Web", "React", "Tailwind", "TypeScript"],
        isFeatured: true,
    },
    {
        title: "English Center Management System",
        description: (
            <div>
                Project Overview: Developed a web-based management system for an English center, consisting of two separate admin
                platforms:
                <div>
                    <ul className="list-disc list-inside">
                        <p className="text-gray-400 font-bold">
                            Company Admin System
                        </p>
                        <li>User and role management</li>
                        <li>Department management</li>
                        <li> Create and manage exam events</li>
                        <li> View candidate lists</li>
                        <li> Score tracking and reporting</li>
                    </ul>

                    <ul className="list-disc list-inside">
                        <p className="text-gray-400 font-bold">Brit Admin System (Exam Management)</p>
                        <li> Exam creation and management</li>
                        <li> Question and answer input</li>
                        <li> Maintain and update exam content</li>
                    </ul>

                </div>
            </div>
        ),
        tech: ["NextJS", "Tailwind", "TypeScript", "React Hook Form", "Zod", "React Query"],
        image: "https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg",
        link: "https://www.google.com",
        github: "https://www.github.com",
        demo: "https://www.demo.com",
        date: "2021-01-01",
        category: "Web",
        tags: ["Web", "React", "Tailwind", "TypeScript"],
        isFeatured: true,
    },
    {
        title: "Konsen – Telegram Mini App",
        description: (
            <ul className="list-disc list-inside">
                <li>Developed a responsive Telegram mini app using React.js and TailwindCSS.</li>
                <li>Implemented a card swipe interaction (left/right) inspired by Tinder-style UX for feature navigation.</li>
                <li>Contributed to UI/UX design decisions due to the absence of a dedicated design team.</li>
                <li>Built reusable UI components and managed client-side data fetching and caching using TanStack
                    React Query, while using Zustand for global UI state management.</li>
            </ul>
        ),
        tech: ["ReactJS", "TailwindCSS", "TypeScript", "TanStack React Query", "Zustand", "Telegram Mini App", "useSprings"],
        image: "https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg",
        link: "https://www.google.com",
        github: "https://www.github.com",
        demo: "https://www.demo.com",
        date: "2021-01-01",
        category: "Web",
        tags: ["Web", "ReactJS", "TailwindCSS", "TypeScript", "TanStack React Query", "Zustand", "Telegram Mini App", "useSprings"],
        isFeatured: true,
    },
    {
        title: "Tonsend – Web3 Platform (tonsend.io)",
        description: (
            <ul className="list-disc list-inside">
                <li>Developed a Web3 frontend integrating TON blockchain functionalities.</li>
                <li>Implemented form handling and validation using React Hook Form and Zod.</li>
                <li>Supported token creation, transfers, airdrop distribution (Merkle tree), and vesting schedule features.</li>
                <li>Ensured responsive UI, seamless blockchain interaction, and maintainable frontend architecture.</li>
                <li>Contributed to UI/UX design decisions due to the absence of a dedicated design team.</li>
            </ul>
        ),
        tech: ["ReactJS", "TailwindCSS", "TypeScript", "React Hook Form", "Zod", "TON Blockchain"],
        image: "https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg",
        link: "https://www.google.com",
        github: "https://www.github.com",
        demo: "https://www.demo.com",
        date: "2021-01-01",
        category: "Web",
        tags: ["Web", "React", "Tailwind", "TypeScript"],
        isFeatured: true,
    },
]

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center m-5">Featured Projects</h2>
                <p className="text-center text-gray-400 text-xl">Check out some of my recent work</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {PROJECT.map((project, index) => (
                        <FeaturedProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

function FeaturedProjectCard({ project, index }: { project: Project, index: number }) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-4xl shadow-md p-4 border border-white/10 hover:translate-y-[-10px] transition-all duration-300"
        >
            <img src={project.image} alt={project.title} className="w-full aspect-16/10 object-cover rounded-3xl" />
            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="text-gray-400">{project.description}</div>
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full font-medium">{tech}</span>
                    ))}
                </div>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <button className="bg-gradient-primary px-4 py-2 rounded-2xl text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                        View Detail <ArrowRightIcon className="size-4" />
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="bg-white/5 px-4 py-2 rounded-2xl text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            <GithubIcon className="size-4" />
                            <span>GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}   