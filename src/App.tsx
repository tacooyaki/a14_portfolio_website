import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Project from './components/Project/Project';
import ProjectModal from './components/ProjectModal/ProjectModal';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm/ContactForm';
//import Table from './components/Table/Table';
//import Text from './components/Text/Text';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';
import { projects, resources, developerSetup } from './data';
import { ContactFormData } from './components/ContactForm/ContactForm.types';
import { ProjectProps } from './components/Project';
import { PiGearFineBold } from 'react-icons/pi';
import { FaDev } from 'react-icons/fa';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { GrResources } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

const AppContainer = styled.div`
  padding-top: 50px; // Navbar height
`;

const Section = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: #1a1a1a;
  color: #ddd;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #aaa;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const App = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );

  const handleProjectClick = (project: ProjectProps) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const skills = {
    description: 'These are my skills.',
    languages: ['Java', 'TypeScript', 'JavaScript', 'Ruby'],
    frameworks: ['React', 'Next.js', 'Express', 'Ruby on Rails'],
    tools: ['JetBrains', 'Git', 'Docker'],
  };

  const navbarLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' },
  ];

  const handleContactSubmit = (data: ContactFormData) => {
    alert(`Message sent: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar links={navbarLinks} />
        <Section id="home">
          <HeroImage
            bgImage="/images/hero.jpg"
            text="Welcome to My Portfolio"
          />
        </Section>
        <Section id="projects">
          <Container>
            <Title>
              <IoCodeSlashOutline />
            </Title>
            <Title>Projects I&apos;ve Built</Title>
            <Subtitle>
              Here are some of the projects I&apos;ve worked on. Click on any
              project to learn more.
            </Subtitle>
            <Grid>
              {projects.map((project, index) => (
                <Project
                  key={index}
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </Grid>
          </Container>
        </Section>
        <Section id="skills">
          <Container>
            <Title>
              <FaDev />
            </Title>
            <Title>Skills</Title>
            <Skills {...skills} />
          </Container>
        </Section>
        <Section id="resources">
          <Container>
            <Title>
              <GrResources />
            </Title>
            <Title>Resources</Title>
            <p>Resources I found helpful on my journey.</p>
            <Resources resources={resources} />
          </Container>
        </Section>
        <Section id="developer-setup">
          <Container>
            <Title>
              <PiGearFineBold />
            </Title>
            <Title>Developer Setup</Title>
            <DeveloperSetup {...developerSetup} />
          </Container>
        </Section>
        <Section id="contact">
          <Container>
            <Title>
              <IoMdContact />
            </Title>
            <Title>Contact</Title>
            <ContactForm onSubmit={handleContactSubmit} />
          </Container>
        </Section>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleModalClose} />
        )}
      </AppContainer>
    </>
  );
};

export default App;
