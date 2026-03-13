import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

type TechnicalSkill = {
    name: string;
    skills: {
        name: string;
        color: string;
        icon: string;
    }[];
}

const TECHNICAL_SKILLS: Array<TechnicalSkill> = [
    {
        name: "Frontend",
        skills: [{
            name: 'ReactJS',
            color: '#61DAFB',
            icon: 'react',
        },
        {
            name: 'NextJS',
            color: '#000000',
            icon: 'nextjs',
        },
        {
            name: 'TailwindCSS',
            color: '#38BDF8',
            icon: 'tailwind',
        },
        {
            name: 'TypeScript',
            color: '#3178C6',
            icon: 'ts',
        },
        {
            name: 'JavaScript',
            color: '#F7DF1E',
            icon: 'js',
        },
        {
            name: 'HTML',
            color: '#E34F26',
            icon: 'html',
        },
        {
            name: 'CSS',
            color: '#1572B6',
            icon: 'css',
        },
        ]
    },
    {
        name: "Backend",
        skills: [{
            name: 'Node.js',
            color: '#339933',
            icon: 'nodejs',
        },
        {
            name: 'Express',
            color: '#000000',
            icon: 'express',
        },
        {
            name: 'MongoDB',
            color: '#47A248',
            icon: 'mongodb',
        },
        {
            name: 'PostgreSQL',
            color: '#336791',
            icon: 'postgres',
        },
        {
            name: 'MySQL',
            color: '#4479A1',
            icon: 'mysql',
        },
        {
            name: 'Redis',
            color: '#DC382D',
            icon: 'redis',
        },
        {
            name: 'Docker',
            color: '#2496ED',
            icon: 'docker',
        },
        ]
    },
]

const IconMap: Record<string, React.ReactNode> = {
    html: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
    ),
    css: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
    ),
    js: (
        <div className="w-12 h-12 bg-[#F7DF1E] text-black font-bold flex items-end justify-end p-1 text-xl rounded-sm">
            JS
        </div>
    ),
    ts: (
        <div className="w-12 h-12 bg-[#3178C6] text-white font-bold flex items-end justify-end p-1 text-xl rounded-sm">
            TS
        </div>
    ),
    react: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="w-12 h-12">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    nextjs: (
        <svg viewBox="0 0 180 180" fill="none" className="w-12 h-12">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0)">
                <circle cx="90" cy="90" r="90" fill="black" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                <rect x="115" y="54" width="12" height="72" fill="white" />
            </g>
        </svg>
    ),
    tailwind: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
    ),
    radix: (
        <svg viewBox="0 0 25 25" fill="none" className="w-12 h-12">
            <path d="M12 25C18.6274 25 24 19.6274 24 13C24 6.37258 18.6274 1 12 1C5.37258 1 0 6.37258 0 13C0 19.6274 5.37258 25 12 25Z" fill="white" />
            <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" fill="black" />
        </svg>
    ),
    nodejs: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7.5 14.1L12 20.3l-7.5-4.2V7.9L12 3.7l7.5 4.2v8.2zM12 6.3l-5.6 3.1v6.2l5.6 3.1 5.6-3.1V9.4L12 6.3z" />
        </svg>
    ),
    express: (
        <div className="w-12 h-12 flex items-center justify-center text-2xl font-black italic text-white">
            ex
        </div>
    ),
    mongodb: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M17.193 9.555c-1.134-4.503-4.488-7.879-4.997-8.379-.197-.196-.462-.196-.659 0-.509.5-3.863 3.876-4.997 8.379-1.235 4.929.315 8.71 1.072 10.335.062.134.186.223.327.245.141.022.285-.022.389-.112.751-.645 2.251-2.015 2.251-2.015s1.5 1.37 2.251 2.015c.104.09.248.134.389.112.141-.022.265-.111.327-.245.757-1.625 2.307-5.406 1.072-10.335zM12.196 17.5c-.751-.645-2.251-2.015-2.251-2.015 0-3.5 1.5-7.5 2.251-8.5.751 1 2.251 5 2.251 8.5 0 0-1.5 1.37-2.251 2.015z" />
        </svg>
    ),
    postgres: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
    ),
    sql: (
        <div className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white border-2 border-white rounded">
            SQL
        </div>
    ),
    docker: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M13.962 11.062h-2.13V9.01h2.13v2.052zM11.406 11.062H9.28V9.01h2.126v2.052zM11.406 8.509H9.28V6.457h2.126v2.052zm0-2.553H9.28V3.903h2.126v2.053zm2.556 2.553h-2.13V6.457h2.13v2.052zm3.258 2.553h-2.13V9.01h2.13v2.052zm-3.258 5.388c-2.735 0-4.959-2.209-4.959-4.942 0-.115.005-.23.014-.343H2.014V13c0 2.024 2.034 2.447 2.034 2.447V16.5c0 .202.166.366.37.366h1.39c.202 0 .366-.164.366-.366v-.563c.945.351 2.134.612 3.513.612 4.59 0 8.339-3.673 8.339-8.19 0-.47-.039-.931-.113-1.376h-2.13v2.052h2.13v2.052h-2.13v2.052h2.13c-.21 2.022-1.854 3.485-3.961 3.485z" />
        </svg>
    ),
    api: (
        <div className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white border-2 border-dashed border-white rounded-full">
            API
        </div>
    ),
    postman: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z" />
        </svg>
    )
};

export default function TechnicalSkills() {
    const [selectedTechnicalSkill, setSelectedTechnicalSkill] = useState(TECHNICAL_SKILLS[0].name);
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center m-5">Technical Skills</h2>
                <p className="text-center text-gray-400 text-xl">My expertise across various technologies and tools</p>
                <div className="flex items-center justify-center mt-5">
                    <div className="rounded-xl flex items-center p-2 gap-4">
                        {TECHNICAL_SKILLS.map((skill) => (
                            <div key={skill.name}
                                className={clsx("px-8 py-2 rounded-full text-lg cursor-pointer font-medium transition-all duration-300 border",
                                    selectedTechnicalSkill === skill.name ? "bg-gradient-primary text-white border-transparent" : "bg-white/5 border-white/10"
                                )}
                                onClick={() => setSelectedTechnicalSkill(skill.name)}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-4 mt-5 max-w-4xl mx-auto">
                    {TECHNICAL_SKILLS.find((skill) => skill.name === selectedTechnicalSkill)?.skills.map((skill, index) => (
                        <TechCard key={skill.name} item={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const TechCard: React.FC<{ item: TechnicalSkill['skills'][number], index: number }> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="tech-card size-40 group relative flex flex-col items-center justify-center p-8 rounded-2xl aspect-square cursor-pointer overflow-hidden"
        >
            {/* Background Glow on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: item?.color }}
            />

            {/* Icon Container */}
            <div
                className="relative z-10 mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: item?.color }}
            >
                {IconMap[item.icon] || <div className="w-12 h-12 bg-gray-800 rounded" />}
            </div>

            {/* Name */}
            <h3 className="relative z-10 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                {item.name}
            </h3>

        </motion.div>
    );
};
