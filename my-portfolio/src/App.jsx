import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import { motion } from "framer-motion";
import NavigationBar from "./components/Navbar";
import SplitText from "./components/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function App() {
  return (
    <div className="app">
      <NavigationBar />
      
      {/* Hero Section */}
      <motion.section 
        id="hero" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="full-page"
      >
        <Container fluid className="hero-content">
          <Row className="align-items-center w-100">
            <Col md={6} className="hero-text">
              <SplitText
                text="Hi, I'm Joey Ng"
                className="display-4"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <p className="lead">Software Engineer</p>
              <motion.div 
                className="contact-icons"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="https://github.com/joeyngg"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/joeyngbusiness/"><FaLinkedin /></a>
                <a href="mailto:joey0508ng@gmail.com"><FaEnvelope /></a>
              </motion.div>
            </Col>
            <Col md={6} className="hero-image-container">
              <motion.img 
                src="/images/joey.jpg" 
                alt="Joey" 
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* About Section */}
      <section id="about" className="full-page text-center">
        <Container>
          <h2 className="mb-4">About Me</h2>
          <p>
            I am a passionate software engineer with a strong interest in software developing, machine learning, and AI. 
            My experience includes working on software projects, fine-tuning language models, and developing 
            AI-driven security solutions. I enjoy solving complex problems and optimizing algorithms for efficiency.
          </p>
          <p>
            Previously, I worked as a research intern at the University of Nebraska-Lincoln, where I focused on fine-tuning 
            LLMs for bug categorization and CWE classification. My work improved classification efficiency by 20%.
          </p>
        </Container>
        <Container>
          <motion.ul 
            className="timeline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <li>🎓 <strong>Graduated with a Computer Science degree</strong> - Developed expertise in deep learning, security research, and software engineering.</li>
            <li>🔬 <strong>Research Intern at UNL</strong> - Focused on fine-tuning LLMs for security bug categorization, improving classification efficiency by 20%.</li>
            <li>🏆 <strong>Hackathon Success</strong> - Secured first runner-up at CornHacks 2024 with an algorithms game project.</li>
            <li>💼 <strong>Software Engineering Projects</strong> - Built various applications, including ML models, web apps, and security-focused tools.</li>
            <li>🚀 <strong>Future Goals</strong> - Seeking a full-time role as a Software Engineer or Machine Learning Engineer.</li>
          </motion.ul>
        </Container>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="full-page text-center">
        <Container>
          <h2 className="mb-4">Projects</h2>
          <Row>
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
              description="A hackathon game built with Pygame and data structures."
              link="https://github.com/joeyngg/CornHacks2024"
            />
            <ProjectCard
              title="G8 E-Commerce Website"
              description="A fashion clothing website using Next.js"
              link="https://github.com/CSCE361-Capstone-Project/E-Commerce"
            />
            <ProjectCard
              title="ZenSurf Chrome Extension"
              description="A Chrome Extension aimed to reduce anxiety and stress for users."
              link="https://github.com/The-Struggle-Bus/ZenSurf"
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}


function ProjectCard({ title, description, link }) {
  return (
    <Col md={4} className="mb-4">
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-card-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </motion.a>
    </Col>
  );
}
