import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import ProjectModal from './components/ProjectModal/ProjectModal';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm/ContactForm';
//import Table from './components/Table/Table';
//import Text from './components/Text/Text';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';
import Footer from './components/Footer/Footer';
import BasicInformation from './components/BasicInformation/BasicInformation';
import { projects, resources, developerSetup, skills } from './data';
//import { ContactFormData } from './components/ContactForm/ContactForm.types';
import { ProjectProps } from './components/Project';
import { PiGearFineBold } from 'react-icons/pi';
import { GiBlackBelt } from 'react-icons/gi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { GrResources } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

const AppContainer = styled.div`
  padding-top: 50px; // Navbar height
`;

const Section = styled.section`
  text-align: center;
  padding: 15px 0;
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

  const navbarLinks = [
    { name: 'Contact', url: '#contact' },
    { name: 'Developer Setup', url: '#developer-setup' },
    { name: 'Resources', url: '#resources' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Home', url: '#about' },
  ];

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar links={navbarLinks} />
        <Section id="about">
          <BasicInformation />
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
              <GiBlackBelt />
            </Title>
            <Title>Skills</Title>
            Here are some of the technologies and tools I have worked with.
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
            <ContactForm />
          </Container>
        </Section>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleModalClose} />
        )}
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
