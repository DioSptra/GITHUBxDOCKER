import React from 'react';
import { Github, Linkedin, Mail, Server, Database, GitBranch, Cloud, Code, Terminal, Globe, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Dio Saputra<span className="text-blue-500">Web</span></h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 bg-blue-900/50 rounded-full text-blue-400 font-medium mb-6">
                AWS Certified DevOps Engineer
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Cloud Infrastructure <span className="text-blue-500">&</span> Automation Expert
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transforming business operations through scalable cloud architecture, CI/CD pipelines, and infrastructure as code. Specializing in AWS, Kubernetes, and modern DevOps practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-white">
                  View Projects
                </a>
                <a href="#contact" className="border border-gray-500 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all text-white">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75"></div>
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600" 
                alt="Cloud Infrastructure" 
                className="relative rounded-full border-4 border-gray-800 w-72 h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50+" label="Projects Delivered" />
            <StatCard number="99.9%" label="Uptime Achieved" />
            <StatCard number="80%" label="Cost Reduction" />
            <StatCard number="24/7" label="Support & Monitoring" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Technical Expertise" subtitle="Specialized Skills" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <SkillCard 
              icon={<Cloud className="w-10 h-10" />}
              title="Cloud Infrastructure"
              description="Expert in AWS services including EC2, S3, Lambda, ECS, and CloudFormation for scalable and resilient architectures."
              skills={["AWS", "Azure", "GCP", "Serverless"]}
            />
            <SkillCard 
              icon={<GitBranch className="w-10 h-10" />}
              title="CI/CD Pipelines"
              description="Implementing automated workflows with GitHub Actions, Jenkins, and GitLab CI for continuous integration and deployment."
              skills={["GitHub Actions", "Jenkins", "ArgoCD", "GitLab CI"]}
            />
            <SkillCard 
              icon={<Code className="w-10 h-10" />}
              title="Infrastructure as Code"
              description="Building reproducible infrastructure using Terraform, CloudFormation, and Ansible for consistent environments."
              skills={["Terraform", "CloudFormation", "Ansible", "Pulumi"]}
            />
            <SkillCard 
              icon={<Terminal className="w-10 h-10" />}
              title="Containerization"
              description="Orchestrating containerized applications with Docker and Kubernetes for scalable microservices architecture."
              skills={["Docker", "Kubernetes", "ECS", "Helm"]}
            />
            <SkillCard 
              icon={<Database className="w-10 h-10" />}
              title="Database Management"
              description="Managing and optimizing database systems including RDS, DynamoDB, MongoDB, and Redis for high performance."
              skills={["RDS", "DynamoDB", "MongoDB", "Redis"]}
            />
            <SkillCard 
              icon={<Shield className="w-10 h-10" />}
              title="Security & Compliance"
              description="Implementing security best practices, IAM policies, and compliance frameworks for secure infrastructure."
              skills={["IAM", "WAF", "Security Groups", "Compliance"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <SectionHeading title="Featured Projects" subtitle="Recent Work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <ProjectCard 
              title="E-Commerce Platform Migration"
              description="Migrated a monolithic e-commerce application to a microservices architecture on AWS, resulting in 40% improved performance and 30% cost reduction."
              image="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=800"
              tags={["AWS", "Kubernetes", "Microservices", "CI/CD"]}
            />
            <ProjectCard 
              title="Financial Services CI/CD Pipeline"
              description="Implemented a secure CI/CD pipeline for a financial services company using GitHub Actions, reducing deployment time from days to minutes."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              tags={["GitHub Actions", "Security", "Docker", "Terraform"]}
            />
            <ProjectCard 
              title="Healthcare Data Platform"
              description="Built a HIPAA-compliant data platform on AWS for healthcare data processing, with automated scaling and disaster recovery."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              tags={["AWS", "HIPAA", "Terraform", "Lambda"]}
            />
            <ProjectCard 
              title="Global CDN Implementation"
              description="Designed and implemented a global content delivery network for a media company, reducing latency by 60% and improving user experience worldwide."
              image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800"
              tags={["CloudFront", "S3", "Edge Computing", "Global"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Client Testimonials" subtitle="What People Say" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <TestimonialCard 
              quote="The infrastructure automation implemented by this team transformed our deployment process. We've seen incredible improvements in reliability and speed."
              author="Sarah Johnson"
              position="CTO, TechCorp"
            />
            <TestimonialCard 
              quote="Our AWS costs were reduced by 35% while performance improved. The DevOps expertise brought to our team was invaluable."
              author="Michael Chen"
              position="Engineering Director, DataFlow"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <SectionHeading title="Get In Touch" subtitle="Contact Me" />
          
          <div className="flex flex-col md:flex-row gap-12 mt-16">
            <div className="flex-1">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can I help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-1">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<Mail className="w-5 h-5" />}
                    title="Email"
                    value="devops@example.com"
                    href="mailto:devops@example.com"
                  />
                  <ContactInfo 
                    icon={<Globe className="w-5 h-5" />}
                    title="Website"
                    value="www.devopspro.com"
                    href="https://www.devopspro.com"
                  />
                  <ContactInfo 
                    icon={<Linkedin className="w-5 h-5" />}
                    title="LinkedIn"
                    value="linkedin.com/in/devopspro"
                    href="https://linkedin.com/in/devopspro"
                  />
                  <ContactInfo 
                    icon={<Github className="w-5 h-5" />}
                    title="GitHub"
                    value="github.com/devopspro"
                    href="https://github.com/devopspro"
                  />
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Available for:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Freelance Projects
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Consulting
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Full-time Opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">DevOps<span className="text-blue-500">Pro</span></h2>
              <p className="text-gray-400 mt-2">Cloud Infrastructure & DevOps Solutions</p>
            </div>
            <div className="flex gap-6">
              <SocialLink icon={<Github className="w-5 h-5" />} href="https://github.com/yourusername" />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com/in/yourusername" />
              <SocialLink icon={<Mail className="w-5 h-5" />} href="mailto:your.email@example.com" />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DevOpsPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h3 className="text-blue-500 font-medium mb-2">{subtitle}</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white mb-2">{number}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

function SkillCard({ icon, title, description, skills }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-blue-500 group">
      <div className="text-blue-500 mb-6 group-hover:text-blue-400 transition-colors">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-blue-500">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-900/70 text-blue-300 text-xs font-medium px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300">{description}</p>
        <a href="#" className="inline-flex items-center text-blue-400 mt-4 font-medium hover:text-blue-300 transition-colors">
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, position }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
      <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, value, href }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-900/50 p-3 rounded-lg text-blue-400">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-gray-400 text-sm">{title}</p>
        <a href={href} className="text-white hover:text-blue-400 transition-colors">
          {value}
        </a>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default App;