import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
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

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #64b5f6;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #64b5f6;
  border-radius: 5px;
  min-height: 150px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Button = styled(motion.button)`
  flex: 1;
  background-color: #64b5f6;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5fa8e6;
  }
`;

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Replace with your actual WhatsApp number
  const whatsappNumber = '+263786209200';
  // Replace with your actual email address
  const emailAddress = 'kudzaicindyrellapemhiwa@gmail.com';

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <ContactContainer
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
          Contact Me
        </Title>
        <Form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextArea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <ButtonContainer>
            <Button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send via WhatsApp
            </Button>
            <Button
              onClick={handleEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send via Email
            </Button>
          </ButtonContainer>
        </Form>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;