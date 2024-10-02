import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #20232a;
  background-color: #f8f9fa;
`;

const Header = styled.header`
  background-color: #20232a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #61dafb;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Footer = styled.footer`
  background-color: #20232a;
  color: #61dafb;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>
      <Header>
        <Logo to="/">KudzaiCindy</Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer>
        © {new Date().getFullYear()} Kudzaicindyrellapemhiwa. All rights reserved.
      </Footer>
    </AppContainer>
  );
};

export default App;