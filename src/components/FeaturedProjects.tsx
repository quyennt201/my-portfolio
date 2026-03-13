import { ArrowRightIcon, GithubIcon } from "lucide-react";

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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {PROJECT.map((project) => (
                        <FeaturedProjectCard key={project.title} project={project} />
                    ))}
                </div>

            </div>
        </section>
    )
}

function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-purple-400/10 rounded-lg shadow-md border border-white/10 hover:translate-y-[-10px] transition-all duration-300">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full font-medium">{tech}</span>
                    ))}
                </div>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <button className="bg-purple-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                        View Detail <ArrowRightIcon className="size-4" />
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="bg-white/5 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            <GithubIcon className="size-4" />
                            <span>GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}   