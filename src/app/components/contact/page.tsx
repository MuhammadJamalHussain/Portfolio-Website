export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="text-center p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </header>
        <main className="p-6 max-w-5xl mx-auto">
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-4 text-gray-700">Feel free to reach out to me through the following channels:</p>
            <ul className="mt-4 list-disc pl-6">
              <li>Email: <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a></li>
              <li>LinkedIn: <a href="#" className="text-blue-500">linkedin.com/in/yourprofile</a></li>
              <li>GitHub: <a href="#" className="text-blue-500">github.com/yourprofile</a></li>
            </ul>
          </section>
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Send a Message</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium" htmlFor="message">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Message" rows={5}></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </section>
        </main>
        <footer className="bg-green-800 text-white text-center p-6">
          <p>&copy; 2025 My Portfolio</p>
        </footer>
      </div>
    )
}