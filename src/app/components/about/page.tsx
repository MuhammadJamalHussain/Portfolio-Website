export default function About() {
    return(
        <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="text-center p-8 bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <h1 className="text-4xl font-bold">About Me</h1>
        </header>
        <main className="p-6 max-w-5xl mx-auto">
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Who Am I?</h2>
            <p className="mt-4 text-gray-700">I am a passionate web developer with expertise in TypeScript, JavaScript, React, and Next.js.</p>
          </section>
          <section className="my-12">
            <h2 className="text-3xl font-semibold">My Journey</h2>
            <p className="mt-4 text-gray-700">I started my coding journey 5 years ago, and since then, I have worked on various exciting projects.</p>
          </section>
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Hobbies & Interests</h2>
            <p className="mt-4 text-gray-700">When I'm not coding, I enjoy photography, traveling to new places, and exploring the latest advancements in technology.</p>
          </section>
          <section className="my-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold">Core Values</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              <li>Commitment to excellence and continuous learning</li>
              <li>Empathy and understanding client needs</li>
              <li>Collaboration and effective communication</li>
            </ul>
          </section>
        </main>
        <footer className="bg-gray-800 text-white text-center p-6">
          <p>&copy; 2025 My Portfolio</p>
        </footer>
      </div>
    )
}