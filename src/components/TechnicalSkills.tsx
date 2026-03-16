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
        skills: [
            {
                name: 'ReactJS',
                color: '#61DAFB',
                icon: 'react',
            },
            {
                name: 'NextJS',
                color: '#fff',
                icon: 'nextjs',
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
            {
                name: 'TailwindCSS',
                color: '#38BDF8',
                icon: 'tailwind',
            },
            {
                name: 'Radix UI',
                color: '#000000',
                icon: 'radix',
            },
        ]
    },
    {
        name: "Form & Validation",
        skills: [
            {
                name: 'React Hook Form',
                color: '#fff',
                icon: 'reacthookform',
            },
            {
                name: 'Zod',
                color: '#fff',
                icon: 'zod',
            },
        ]
    },
    {
        name: "Backend",
        skills: [
            {
                name: 'Node.js',
                color: '#339933',
                icon: 'nodejs',
            },
            {
                name: 'Rest API',
                color: '#fff',
                icon: 'api',
            },

            {
                name: 'Postman',
                color: '#FF6C37',
                icon: 'postman',
            },
        ]
    },
    {
        name: "Tools",
        skills: [
            {
                name: 'Git',
                color: '#F05032',
                icon: 'git',
            },
            {
                name: 'GitHub',
                color: '#fff',
                icon: 'github',
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
        <svg fill="currentColor" className="w-12 h-12 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Radix UI</title><path d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z" /></svg>
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
        <svg fill="currentColor" className="w-12 h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Postman</title><path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" /></svg>
    ),
    github: (
        <svg fill="currentColor" className="w-12 h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    ),
    git: (
        <svg fill="currentColor" className="w-12 h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" /></svg>
    ),
    zod: (
        <svg fill="currentColor" className="w-12 h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zod</title><path d="M2.584 3.582a2.247 2.247 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.248 2.248 0 0 1-.624 2.443l-9.61 8.52a2.247 2.247 0 0 1-2.963.018L.776 12.773a2.248 2.248 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007c.456.399 1.139.396 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z" /></svg>
    ),
    reacthookform: (
        <svg fill="currentColor" className="w-12 h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React Hook Form</title><path d="M10.7754 17.3477H5.8065a.2815.2815 0 1 0 0 .563h4.9689a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9688a.2815.2815 0 1 0 0 .563h4.9688a.2815.2815 0 0 0 0-.563zm-7.3336-6.475H5.8065a.2815.2815 0 1 0 0 .563h4.9548a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9547a.2815.2815 0 1 0 0 .563h4.9547a.2815.2815 0 0 0 0-.563zm.5518-9.2001h-4.341a2.4042 2.4042 0 0 0-4.5804 0H5.3674c-1.7103 0-3.0968 1.3864-3.0968 3.0967v16.134C2.2706 22.6135 3.6571 24 5.3674 24h13.2652c1.7103 0 3.0968-1.3865 3.0968-3.0967V4.7693c0-1.7103-1.3865-3.0967-3.0968-3.0967zm-8.7046.563a.2815.2815 0 0 0 .2815-.2224 1.8411 1.8411 0 0 1 3.5979 0 .2815.2815 0 0 0 .2815.2224h1.5146v1.844a.8446.8446 0 0 1-.8446.8446H9.2552a.8446.8446 0 0 1-.8446-.8446v-1.844Zm11.2383 18.6677c0 1.3993-1.1344 2.5337-2.5337 2.5337H5.3674c-1.3993 0-2.5337-1.1344-2.5337-2.5337V4.7693c0-1.3993 1.1344-2.5337 2.5337-2.5337h2.4802v1.844c0 .7774.6302 1.4076 1.4076 1.4076h5.4896c.7774 0 1.4076-.6302 1.4076-1.4076v-1.844h2.4802c1.3993 0 2.5337 1.1344 2.5337 2.5337z" /></svg>
    ),
};

export default function TechnicalSkills() {
    const [selectedTechnicalSkill, setSelectedTechnicalSkill] = useState(TECHNICAL_SKILLS[0].name);
    const skills = TECHNICAL_SKILLS.find((skill) => skill.name === selectedTechnicalSkill)?.skills;
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
                    {skills?.map((skill, index) => (
                        <TechCard key={skill.name} item={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const TechCard: React.FC<{
    item: {
        name: string;
        icon: string;
        color?: string;
    }, index: number
}> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="size-40 group relative flex flex-col items-center justify-center p-8 rounded-2xl aspect-square cursor-pointer overflow-hidden"
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
