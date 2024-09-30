import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #ff69b4;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffecf1;
  }
`;

const SocialMedia: React.FC = () => {
  return (
    <SocialContainer>
      <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialMedia;