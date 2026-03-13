import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { motion } from 'motion/react';
import ReactIcon from './icons/ReactIcon';

export default function HeroSection() {
    return (
        <section id="home" className="pt-48 pb-32 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl font-bold">Hi, I'm John Doe</h1>
                    <p className="capitalize text-gradient text-3xl font-medium leading-tight">
                        frontend developer
                    </p>
                    <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                        Crafting modern, responsive, and user-friendly websites with passion and precision.
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                        <button className="bg-gradient-primary px-10 text-xl py-4 rounded-full text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            Down Resume <DownloadIcon className="size-6" />
                        </button>
                        <div className='flex items-center gap-6'>
                            <div className="rounded-full p-3 bg-white/5 flex items-center justify-center">
                                <GithubIcon className="size-6" />
                            </div>
                            <div className="rounded-full p-3 bg-white/5 flex items-center justify-center">
                                <LinkedinIcon className="size-6" />
                            </div>
                            <div className="rounded-full p-3 bg-white/5 flex items-center justify-center">
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
                                src="https://picsum.photos/seed/meriem/1000/1000"
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full"
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
                            <img src="https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-size_512.png" className='size-8 object-contain' alt="" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] -right-6 w-14 h-14 z-20 glass rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md bg-white/5 border border-white/10"
                        >
                            <div className="w-9 h-9 bg-orange-500/20 rounded-full flex items-center justify-center">
                                <span className="text-orange-400 font-bold text-xs">HTML</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
