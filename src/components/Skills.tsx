import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const SkillsContainer = styled(motion.div)`
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #64b5f6;
  margin-bottom: 0.5rem;
`;

const SkillBar = styled.div`
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const SkillLevel = styled.div<{ level: number }>`
  height: 100%;
  width: ${props => props.level}%;
  background-color: #64b5f6;
  border-radius: 5px;
`;

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Html &Css', level: 85 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Django', level: 90 },
    { name: 'Php', level: 65 },
    { name: 'Mysql', level: 90 },
    { name: 'Flutter', level:  70},
  ];

  return (
    <SkillsContainer
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
          My Skills
        </Title>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SkillGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillName>{skill.name}</SkillName>
                <SkillBar>
                  <SkillLevel level={skill.level} />
                </SkillBar>
              </SkillCard>
            ))}
          </SkillGrid>
        </Section>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills;