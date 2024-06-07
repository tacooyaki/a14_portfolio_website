import React from 'react';
import styled from 'styled-components';
import Project from '../Project/Project';
import { WorkProps } from './Work.types';

const WorkContainer = styled.div`
  width: 80%;
  margin: 40px 0;
`;

const Work: React.FC<WorkProps> = ({ projects }) => {
  return (
    <WorkContainer>
      <h2>Work</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          techList={project.techList}
        />
      ))}
    </WorkContainer>
  );
};

export default Work;
