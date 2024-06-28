import React from 'react';
import styled from 'styled-components';
import { ProjectProps } from '../Project/Project.types';
import Project from '../Project/Project';

const WorkContainer = styled.div`
  margin: 20px 0;
`;

const WorkTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

interface WorkProps {
  projects: ProjectProps[];
}

const Work: React.FC<WorkProps> = ({ projects }) => {
  return (
    <WorkContainer>
      <WorkTitle>Work</WorkTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ProjectsGrid>
    </WorkContainer>
  );
};

export default Work;
