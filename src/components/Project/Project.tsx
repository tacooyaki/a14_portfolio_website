import React from 'react';
import styled from 'styled-components';
import { ProjectProps } from './Project.types';

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  techList,
  onClick,
}) => {
  return (
    <ProjectContainer onClick={onClick}>
      <ProjectImage src={image} alt={title} />
      <Overlay className="overlay">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
        <TechList>
          {techList.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
      </Overlay>
    </ProjectContainer>
  );
};

export default Project;
