import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import Image from "next/image";

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
        <section id="about" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column - Profile Picture and Social Media */}
            <div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src="/images/profile.jpg" // Add your profile picture path
                  alt="Profile Picture"
                  fill
                  className="rounded-full object-cover"
                  style={{ objectPosition: 'center 5%' }}
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Ella Rasoulian</h1>
              <div className="flex gap-4 justify-center">
                {/* Email Icon */}
                <a
                  href="mailto:elaheh.rasoulian@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                {/* GitHub Icon */}
                <a
                  href="https://github.com/ellaaraa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/ella-rasoulian" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - About Content */}
            <div className="flex-1 space-y-6">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a product manager with hands-on expertise in machine learning and large language models.
            </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I began my career in product management, leading data-driven product initiatives end-to-end. 
                Before that, I built a strong foundation in business and product strategy through my education at the Schulich School of Business, 
                and recently deepened my technical expertise in data science and machine learning at Georgia Tech, 
                where I gained hands-on experience in machine learning, NLP, LLMs, and conversational AI through both research-driven and applied projects.
            </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Today, I work at the intersection of product strategy and advanced AI systems, 
                translating ML frameworks into scalable products. 
              </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300"> 
                My goal is to build and lead AI/ML platforms and developer-facing products.
            </p>
            
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Interests</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>LLM-powered developer tools and productivity workflows</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Human-centered design</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Mentoring students</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Running, hiking, and exploring new food spots</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Projects</h2>
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Left Side - Cover Image */}
                <div className="flex-shrink-0 w-full md:w-80">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src={project.coverImage || "/images/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Side - Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                    {/* Technologies Section */}
                    {project.technologies && project.technologies.length > 0 && (
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
                    )}
                  {/* Highlights Section */}
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
                    <div className="mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  {/* Logo inside the card */}
                  {exp.logo && (
                    <div className="flex-shrink-0 w-20 h-20">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0 md:ml-4">
                        {exp.startDate} - {exp.endDate} · {exp.location}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
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
