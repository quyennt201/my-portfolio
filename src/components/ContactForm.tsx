import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setSuccess(false);
        setError(false);

        await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current as HTMLFormElement,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setSuccess(true);
            form.current?.reset();
        }).catch((err) => {
            setError(true)
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center m-5">Contact Me</h2>
                <p className="text-center text-gray-400 text-xl">Get in touch with me</p>
                <form className="p-10 rounded-4xl glass space-y-8 mt-10" ref={form} onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label htmlFor="name" className="text-sm text-gray-400 font-bold ml-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
                                name="name"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-sm text-gray-400 font-bold ml-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="message" className="text-sm text-gray-400 font-bold ml-2">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            placeholder="Your Message"
                            name="message"
                            className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
                        />
                    </div>
                    <button type="submit" className="w-full cursor-pointer bg-gradient-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 glow-purple">
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {success && (
                        <p className="text-green-500 text-center">Message sent successfully!</p>
                    )}
                    {error && (
                        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    )
}