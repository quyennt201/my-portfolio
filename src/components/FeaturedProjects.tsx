import clsx from "clsx";
import { ArrowRightIcon, GithubIcon, LockIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import ReadMore from "./ReactMore";

type Project = {
    title: string;
    description: ReactNode;
    tech: string[];
    image: string;
    link: string;
    github?: string;
    date: string;
}

const PROJECT: Array<Project> = [
    {
        title: "ConnectRoomFree – Room Rental Listing Platform",
        description: (
            <ReadMore>
                Built a room rental platform connecting tenants and landlords, focusing primarily on backend development while implementing basic frontend features.
                <p className="text-gray-400 font-bold"> Backend Features: </p>
                <ul className="list-disc list-inside">
                    <li>Implemented authentication and role-based access control (Admin, User)</li>
                    <li>Designed and managed relational database schema using PostgreSQL</li>
                    <li>Developed RESTful APIs for CRUD operations on rental listings</li>
                </ul>
                <p className="text-gray-400 font-bold"> Frontend Features: </p>
                <ul className="list-disc list-inside">
                    <li>Built UI for displaying rental listings</li>
                    <li>Implemented filtering and search functionality</li>
                    <li>Integrated APIs for data fetching and rendering</li>
                </ul>
            </ReadMore>
        ),
        tech: ["NestJS", "ReactJS", "TypeScript", "PostgreSQL", "Docker"],
        image: "/connect-room.jpg",
        link: "https://connect-room-free.homes",
        github: "https://github.com/quyennt201/fe-connect-room",
        date: "2026",
    },
    {
        title: "TonKombat – Telegram Mini Game (Active project)",
        description: (
            <ReadMore>
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
            </ReadMore>
        ),
        tech: ["ReactJS", "TailwindCSS", "Radix UI", "TypeScript", "TanStack React Query", "Zustand", "Telegram Mini App", "useSprings"],
        image: "/tkb.jpg",
        link: "https://t.me/Ton_kombat_bot/app",
        date: "2025",
    },
    {
        title: "Exam Management System (Multi-role Platform)",
        description: (
            <ReadMore>
                Project Overview: Developed frontend features for a role-based exam management system with User, Admin, and Super Admin roles, supporting authentication, authorization, and dynamic UI rendering based on user permissions.
                <div>
                    <ul className="list-disc list-inside">
                        <p className="text-gray-400 font-bold">
                            Authentication
                        </p>
                        <li>Implemented authentication (Google OAuth) with protected routes</li>
                        <li>
                            Built role-based access control and dynamic UI rendering
                        </li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <p className="text-gray-400 font-bold">
                            Admin Features:
                        </p>
                        <li>Built user management interfaces (view and update user data)</li>
                        <li>Developed exam creation and management workflows</li>
                        <li>Implemented candidate tracking and participation views</li>
                        <li>Built dashboards for statistics and score reporting</li>
                    </ul>

                    <ul className="list-disc list-inside">
                        <p className="text-gray-400 font-bold">Super Admin Features:</p>
                        <li> Exam creation and management</li>
                        <li> Question and answer input</li>
                        <li> Maintain and update exam content</li>
                    </ul>

                </div>
            </ReadMore>
        ),
        tech: ["NextJS", "Tailwind", "TypeScript", "React Hook Form", "Zod", "Tanstack Query"],
        image: "https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg",
        link: "https://toeic.brit.edu.vn/",
        date: "2025",
    },
    {
        title: "Tonsend – Web3 Platform (tonsend.io)",
        description: (
            <ReadMore>
                <ul className="list-disc list-inside">
                    <li>Developed a Web3 frontend integrating TON blockchain functionalities.</li>
                    <li>Implemented form handling and validation using React Hook Form and Zod.</li>
                    <li>Supported token creation, transfers, airdrop distribution (Merkle tree), and vesting schedule features.</li>
                    <li>Ensured responsive UI, seamless blockchain interaction, and maintainable frontend architecture.</li>
                    <li>Contributed to UI/UX design decisions due to the absence of a dedicated design team.</li>
                </ul>
            </ReadMore>
        ),
        tech: ["ReactJS", "TailwindCSS", "TypeScript", "React Hook Form", "Zod", "TON Blockchain"],
        image: "/tonsend.jpg",
        link: "https://tonsend.io",
        date: "2025",
    },
    {
        title: "Konsen – Telegram Mini App",
        description: (
            <ReadMore>
                <ul className="list-disc list-inside">
                    <li>Developed a responsive Telegram mini app using React.js and TailwindCSS.</li>
                    <li>Implemented a card swipe interaction (left/right) inspired by Tinder-style UX for feature navigation.</li>
                    <li>Contributed to UI/UX design decisions due to the absence of a dedicated design team.</li>
                    <li>Built reusable UI components and managed client-side data fetching and caching using TanStack
                        React Query, while using Zustand for global UI state management.</li>
                </ul>
            </ReadMore>
        ),
        tech: ["ReactJS", "TailwindCSS", "TypeScript", "TanStack React Query", "Zustand", "Telegram Mini App", "useSprings"],
        image: "/konsen.jpg",
        link: "https://t.me/Sentient_AI_bot/hello",
        date: "2024",
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
            className="bg-white/5 backdrop-blur-xl rounded-4xl flex flex-col shadow-md p-4 border border-white/10 hover:border-primary/60 transition-all duration-300"
        >

            <div className="w-full aspect-16/10 object-cover rounded-3xl relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-3xl" />
                <div className={clsx("text-xs absolute bottom-2 right-2 px-4 py-1 rounded-full font-bold text-white bg-linear-to-b from-purple-500 to-pink-500")}>
                    {project.date}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1 gap-4 items-center justify-between">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="text-gray-400">{project.description}</div>
                    <div className="flex items-center flex-wrap gap-2 mt-4">
                        {project.tech.map((tech) => (
                            <span key={tech} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-end w-full justify-between gap-4 mt-4">
                    <button onClick={() => window.open(project.link, '_blank')} className="bg-gradient-primary px-4 py-2 hover:scale-105 rounded-2xl text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                        View Project <ArrowRightIcon className="size-4" />
                    </button>
                    <div className="flex items-center gap-2">
                        {project?.github ? (
                            <button onClick={() => window.open(project.github, '_blank')} className="bg-white/5 px-4 py-2 hover:scale-105 rounded-2xl text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                <GithubIcon className="size-4" />
                                <span>GitHub</span>
                            </button>
                        ) : (
                            <div className="bg-white/5 px-4 py-2 rounded-2xl text-white font-medium transition-all duration-300 flex items-center gap-2">
                                <LockIcon className="size-4" />
                                <span>Private</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div >
    );
}   