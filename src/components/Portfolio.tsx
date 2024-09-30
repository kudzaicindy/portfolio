import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PortfolioContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2a3a 100%);
  color: #e0e0e0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #64b5f6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #64b5f6;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #64b5f6;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e88e5;
  }
`;

const AddProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const AddIcon = styled.div`
  font-size: 3rem;
  color: #64b5f6;
  margin-bottom: 1rem;
`;

const AddText = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
`;

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with HTML, CSS, and JavaScript.',
      image: '/path/to/portfolio.jpg',
      link: 'https://kudzaicindy.github.io'
    },
    { 
      title: 'E-commerce Website', 
      description: 'A fully functional online store built with React and Node.js', 
      image: '/path/to/project1.jpg',
      link: '#'
    },
    { 
      title: 'Weather App', 
      description: 'A weather application using React and a weather API', 
      image: '/path/to/project2.jpg',
      link: '#'
    },
    { 
      title: 'Task Manager', 
      description: 'A productivity app built with React and TypeScript', 
      image: '/path/to/project3.jpg',
      link: '#'
    },
  ]);

  const stats = [
    { number: projects.length, label: 'Projects Completed' },
    { number: 2, label: 'Ongoing Projects' },
    { number: 3, label: 'Happy Clients' },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAddProject = () => {
    // Implement your logic to add a new project
    const newProject: Project = {
      title: 'New Project',
      description: 'Description of the new project',
      image: '/path/to/new-project.jpg',
      link: '#'
    };
    setProjects([...projects, newProject]);
  };

  return (
    <PortfolioContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContentWrapper>
        <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Portfolio
        </Title>

        <StatsContainer
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} variants={variants}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>

        <ProjectGrid
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectLink>
              </ProjectInfo>
            </ProjectCard>
          ))}
          <AddProjectCard
            onClick={handleAddProject}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + projects.length * 0.2, duration: 0.8 }}
          >
            <AddIcon>+</AddIcon>
            <AddText>Add Project</AddText>
          </AddProjectCard>
        </ProjectGrid>
      </ContentWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;