import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { projects } from "@/data/projects";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans pt-24 px-6 sm:px-20 space-y-32 pb-20`}
      >
        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Ella 👋
            </h1>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a product manager with hands-on expertise in machine learning and large language models, 
            focused on building technically deep, user-centered AI products.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I began my career in product management, leading data-driven product initiatives end-to-end. 
            To deepen my technical foundation, I recently graduated with a Master’s in Analytics, 
            where I gained data-scientist-level experience in machine learning, NLP, LLMs, and conversational AI through research-driven and applied projects.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-400">
            Today, I work at the intersection of product strategy and advanced AI systems, 
            translating complex ML frameworks into scalable, real-world products. 
            My goal is to build and lead AI/ML platforms and developer-facing products 
            where deep technical understanding is essential to making the right product decisions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Product Management",
                  "AI/ML Strategy",
                  "Generative AI",
                  "Natural Language Processing",
                  "Data Science",
                  "User Research",
                  "Technical Leadership",
                  "Cross-functional Collaboration"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of my recent work in AI/ML research and product management
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 mt-4"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">My Resume</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Download or view my resume below
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <iframe
              src="/resume.pdf"
              className="w-full h-[90vh] min-h-[600px]"
              title="Resume"
            />
            <div className="p-4 bg-gray-50 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
              If the PDF doesn't load, please{" "}
              <a
                href="/resume.pdf"
                download
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                download it here
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
