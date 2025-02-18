import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-6 text-center text-2xl font-bold">
        Joey Ng
      </header>

      {/* Hero Section */}
      <section className="text-center mt-10">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Joey!
        </motion.h1>
        <p className="mt-4 text-lg">Software Engineer | ML Enthusiast</p>
      </section>

      {/* Projects Section */}
      <section className="mt-12 w-3/4">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="CASEY"
            description="Streamlining Security Vulnerability Triage with Large Language Models."
            link="https://github.com/mohammadJaliliTorkamani/CASEY"
          />
          <ProjectCard
            title="Pac-Man AI Agent with Deep Q-Learning"
            description="A reinforcement learning agent to play Ms. Pac-Man using a Deep Q-Network (DQN)."
            link="https://github.com/JohnsonYap-1211/CSCE479-JJJ/tree/main/Milestone3"
          />
          <ProjectCard
            title="Even Steven Beats the Odds"
            description="A hackathon game built with Pygame and data structure and algotithm."
            link="https://github.com/joeyngg/CornHacks2024"
          />
          <ProjectCard
            title="G8 E-Commerce Website"
            description="A fashion clothing website using Next.js"
            link="https://github.com/CSCE361-Capstone-Project/E-Commerce"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://github.com/joeyngg" className="text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/joeyngbusiness/" className="text-2xl"><FaLinkedin /></a>
          <a href="mailto:joey0508ng@gmail.com" className="text-2xl"><FaEnvelope /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 p-4 text-center text-sm">
        © {new Date().getFullYear()} Joey. All Rights Reserved.
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      className="p-6 bg-gray-800 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        className="text-blue-400 hover:underline mt-2 inline-block"
      >
        View Project →
      </a>
    </motion.div>
  );
}
