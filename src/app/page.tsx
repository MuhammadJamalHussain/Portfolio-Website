export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800">
      <header className="text-center py-16 bg-gradient-to-r from-indigo-500 to-green-600 text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4 text-gray-200 font-light">Showcasing my work and skills as a web developer</p>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Introduction</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">I am a passionate web developer specializing in creating responsive and modern web applications. With a love for coding and an eye for design, I create user-friendly digital experiences tailored to clients' needs.</p>
        </section>
        <section className="my-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center">
              <span className="text-blue-500 text-xl">✔</span>
              <p className="ml-2">TypeScript, JavaScript, React, and Next.js</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-xl">✔</span>
              <p className="ml-2">Responsive Design with Tailwind CSS</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-xl">✔</span>
              <p className="ml-2">RESTful APIs & Third-Party Integrations</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-xl">✔</span>
              <p className="ml-2">Version Control with Git</p>
            </div>
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">E-commerce Website</h3>
              <p className="mt-2 text-gray-600">A fully functional online store with product listings, cart, and checkout.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Portfolio Website</h3>
              <p className="mt-2 text-gray-600">A personal portfolio showcasing projects and skills with a responsive design.</p>
            </div>
          </div>
        </section>
        <section className="my-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
          <div className="mt-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700 italic">
              "A highly skilled developer with a great sense of design. Delivered every project on time and exceeded expectations!" - Client A
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 mt-4 text-gray-700 italic">
              "Excellent problem-solving skills and attention to detail. Highly recommended!" - Client B
            </blockquote>
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-lg text-center text-gray-700">For collaborations or inquiries, visit the Contact page.</p>
        </section>
      </main>
      <footer className="bg-green-800 text-white text-center py-6">
        <p>&copy; 2025 My Portfolio</p>
      </footer>
    </div>
  );
}