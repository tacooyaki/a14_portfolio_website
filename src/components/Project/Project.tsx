import React from 'react';
import styled from 'styled-components';
import { ProjectProps } from './Project.types';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

const TechItem = styled.li`
  display: inline;
  margin-right: 10px;
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  techList,
}) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectImage src={image} alt={title} />
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </ProjectLink>
      <TechList>
        {techList.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </TechList>
    </ProjectContainer>
  );
};

export default Project;
