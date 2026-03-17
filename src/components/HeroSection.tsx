import { DownloadIcon, GithubIcon, MailIcon } from 'lucide-react';
import { motion } from 'motion/react';
import ReactIcon from './icons/ReactIcon';
import TailwindIcon from './icons/TailwindIcon';
import TypescriptIcon from './icons/TypescriptIcon';

const CONTENTS =
{
    name: 'Quyen Nguyen',
    subtitle: 'frontend developer',
    description: (
        <p>
            Frontend Developer with 2+ years of experience building scalable web applications using React, Next.js, and TypeScript.
            Experienced in developing responsive UI, optimizing performance, and integrating REST APIs and Web3 features. Passionate
            about building clean, maintainable frontend architectures and delivering high-quality user experiences.
        </p>
    ),
    resume: '/Nguyen-Thi-Quyen_Frontend-Developer.pdf',
    github: 'https://github.com/quyennt2001',
    email: 'mailto:quyennt2001@gmail.com?subject=Contact from Portfolio',
}

export default function HeroSection() {
    const handleGithub = () => {
        window.open(CONTENTS.github, '_blank');
    }

    const handleEmail = () => {
        window.open(CONTENTS.email, '_blank');
    }

    return (
        <section id="home" className="pt-48 pb-32 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl font-bold">Hi, I'm {CONTENTS.name}</h1>
                    <p className="capitalize text-gradient text-3xl font-medium leading-tight">
                        {CONTENTS.subtitle}
                    </p>
                    <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                        {CONTENTS.description}
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                        <a href={CONTENTS.resume} download className="bg-gradient-primary hover:scale-105 transition-all duration-300 px-10 text-lg py-4 rounded-full text-white font-medium flex items-center gap-2 cursor-pointer">
                            Download Resume <DownloadIcon className="size-6" />
                        </a>
                        <div className='flex items-center gap-6'>
                            <div onClick={handleGithub} className="cursor-pointer hover:scale-110 transition-all duration-300 rounded-full p-3 bg-white/5 flex items-center justify-center">
                                <GithubIcon className="size-6" />
                            </div>
                            <div onClick={handleEmail} className="cursor-pointer hover:scale-110 transition-all duration-300 rounded-full p-3 bg-white/5 flex items-center justify-center">
                                <MailIcon className="size-6" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='flex items-center justify-center'
                >
                    <div className='w-full max-w-[500px] aspect-square relative'>
                        <div className='absolute rounded-full inset-0 bg-linear-to-tr from-purple-600/40 to-pink-600/40 blur-2xl animate-pulse' />
                        <div className='relative z-10 size-full rounded-full overflow-hidden border-[6px] border-white/5 bg-background p-2'>
                            <img
                                src="/avt.jpg"
                                alt="Avatar"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                            className='size-20 flex items-center justify-center backdrop-blur-md bg-white/5 border border-white/10 rounded-full absolute bottom-4 right-8 z-20'
                        >
                            <ReactIcon className='size-12 text-[#087ea4]' />
                        </motion.div>
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className='absolute top-4 z-20 left-4 size-14 flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-full'>
                            {/* <img src="https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-size_512.png" className='size-8 object-contain' alt="" /> */}
                            <TailwindIcon className='size-8 text-white fill-sky-400' />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] -right-6 w-14 h-14 z-20 glass rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md bg-white/5 border border-white/10"
                        >
                            <TypescriptIcon className='size-6 text-white fill-blue-400' />
                            {/* <div className="w-9 h-9 bg-orange-500/20 rounded-full flex items-center justify-center">
                                <span className="text-orange-400 font-bold text-xs">HTML</span>
                            </div> */}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
