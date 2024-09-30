import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
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

const Section = styled(motion.section)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #64b5f6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #e0e0e0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #e0e0e0;

  &:before {
    content: '•';
    color: #64b5f6;
    position: absolute;
    left: 0;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer
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
          About Me
        </Title>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SectionTitle>Who I Am</SectionTitle>
          <Content>
          Hi 😁! My name is Kudzai Cindyrella Pemhiwa. I am a girl aged 21. I am in my second year doing my major in Computer Science at the University of Zimbabwe. I really think that skills matter more than grades. As a result, I have come to improve and expand my skills ranging from software development, website development, application development to as far as marketing. I have a strong interest in finding the most effective solutions to issues. More important to me than whether the solution works is how well it works. This applies to every software solution I create and every hardware patch I make. I am very passionate about solving problems in the most efficient way. As a computer scientist I possess a unique blend of technical skills, creativity and problem-solving abilities that set me apart in the field. My passion for technology and innovation drives me to excel in various aspects of computer science, making me a valuable asset to any team or project. I am proficient in programming languages such as Python, Java, PHP and databases like MySQL. I have expertise in data structures, algorithms and software development which enables me to tackle complex problems.
          
          </Content>
        </Section>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Bachelor of Science in Computer Science - University of Zimbabwe, 2016
            </ListItem>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
               Software Engineering (Scrum, Allison) 
            </ListItem>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Data Communication and Computer Networks (Cisco, Ensp)
            </ListItem>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
               Database Design and Management Systems (SQL, Postgresql, Mysql)
            </ListItem>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
               Microsoft Proficient (Word, Excel, PowerPoint, Publisher) 
            </ListItem>
            
          </List>
        </Section>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <SectionTitle>Certifications</SectionTitle>
          <List>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
           Scrum Fundamentals Certified, Alison Certified 
            </ListItem>
            <ListItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Mobile and Web version solution for farmers eHuawei
            </ListItem>
           
          </List>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;