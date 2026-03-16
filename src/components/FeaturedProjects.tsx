import { ArrowRightIcon, GithubIcon } from "lucide-react";
import { motion } from "motion/react";

type Project = {
    title: string;
    description: string;
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
        title: "Project 1",
        description: "Project 1 description",
        tech: ["React", "Tailwind", "TypeScript"],
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
        title: "Project 2",
        description: "Project 2 description",
        tech: ["React", "Tailwind", "TypeScript"],
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
        title: "Project 3",
        description: "Project 3 description",
        tech: ["React", "Tailwind", "TypeScript"],
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
        title: "Project 4",
        description: "Project 4 description",
        tech: ["React", "Tailwind", "TypeScript"],
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

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
                    <p className="text-gray-400 line-clamp-3">{project.description}</p>
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