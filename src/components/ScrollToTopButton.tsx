import { ArrowUpIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ScrollToTopButtonProps {
    showBtn: boolean;
}

export default function ScrollToTopButton({ showBtn }: ScrollToTopButtonProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {showBtn && (
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="rounded-full cursor-pointer bg-gradient-primary text-white size-14 hover:scale-105 transition-all duration-300 flex items-center justify-center fixed bottom-10 right-10"
                    onClick={scrollToTop}
                >
                    <ArrowUpIcon className="size-8" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}