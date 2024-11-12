import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import useTypingEffect from '../useTypingEffect';

const HomeContainer = styled(motion.div)`
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

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
     padding-top:2rem;
  }
`;

const ProfilePicture = styled(motion.div)`
  width: 350px;
  height: 200px;
  margin-top: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TypedWrapper = styled(motion.div)`
  font-size: 1.5rem;
  color: #64b5f6;
  margin-bottom: 1rem;
  height: 2rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #64b5f6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e88e5;
  }
`;

const Home: React.FC = () => {
  const typedText = useTypingEffect(
    ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Software Developer'],
    100,
    50,
    2000
  );

  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/0_Kudzai Pemhiwa Resume_112638 (1).pdf';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Kudzai_Pemhiwa_Resume.pdf');
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HomeContainer
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
          Welcome to My Portfolio
        </Title>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ProfileSection>
            <ProfilePicture
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <ProfileImage src={process.env.PUBLIC_URL + '/anime.jpg'} alt="Kudzai Cindyrella Pemhiwa" />
            </ProfilePicture>
            <div>
              <SectionTitle>Hi, I'm Kudzai Cindyrella Pemhiwa</SectionTitle>
              <TypedWrapper>{typedText}</TypedWrapper>
              <Content>
                Passionate about creating elegant, efficient, and user-friendly web applications. 
                With expertise in React, TypeScript, and Node.js, I bring ideas to life through clean code and intuitive design.
              </Content>
              <ButtonContainer>
                <Button 
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </Button>
              </ButtonContainer>
            </div>
          </ProfileSection>
        </Section>

        <Section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SectionTitle>What I Do</SectionTitle>
          <Content>
            As a full-stack developer and UI/UX designer, I specialize in creating comprehensive web solutions. 
            From crafting intuitive user interfaces to implementing robust back-end systems, 
            I ensure that every project I undertake is both visually appealing and functionally sound.
          </Content>
        </Section>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;