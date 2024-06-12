import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Project from './components/Project/Project';
import ProjectModal from './components/ProjectModal/ProjectModal';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm/ContactForm';
import Table from './components/Table/Table';
//import Text from './components/Text/Text';
import { projects } from './data';
import { ContactFormData } from './components/ContactForm/ContactForm.types';
import { ProjectProps } from './components/Project';

const AppContainer = styled.div`
  padding-top: 50px; // be sure to adjust based on the navbar height
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
    description: '',
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Next.js', 'Express'],
    tools: ['Git', 'Docker', 'Jenkins'],
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
    <AppContainer>
      <Navbar links={navbarLinks} />
      <Section id="home">
        <HeroImage
          bgImage="https://placehold.jp/50/20451c/ffffff/500x500.png"
          text="Welcome to My Portfolio"
        />
      </Section>
      <Section id="projects">
        <Container>
          <Title>Projects I&apos;ve Built</Title>
          <Subtitle>Here are some of the projects I&apos;ve built.</Subtitle>
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
      <Section id="experience">
        <h2>Experience</h2>
        <Table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACFN</td>
              <td>Data Technician</td>
              <td>5 years</td>
            </tr>
            <tr>
              <td>Acrodex</td>
              <td>Service Desk</td>
              <td>2 years</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="skills">
        <h2>Skills and Technologies</h2>
        <Skills {...skills} />
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </Section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleModalClose} />
      )}
    </AppContainer>
  );
};

export default App;
