export default function ContactForm() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center m-5">Contact Me</h2>
                <p className="text-center text-gray-400 text-xl">Get in touch with me</p>
                <form className="p-10 rounded-4xl glass space-y-8 mt-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label htmlFor="name" className="text-sm text-gray-400 font-bold ml-2">Name</label>
                            <input
                                type="text"
                                id="name" placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-sm text-gray-400 font-bold ml-2">Email</label>
                            <input
                                type="email"
                                id="email" placeholder="your@email.com"
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
                            className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
                        />
                    </div>
                    <button type="submit" className="w-full cursor-pointer bg-gradient-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 glow-purple">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}