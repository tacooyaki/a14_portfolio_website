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
  min-height: 480px;
  align-items: center;
  justify-content: center;

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
  max-width: 450px;
  max-height: 550px;
  object-fit: cover;
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
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
  display: flex;
  justify-content: center;
`;

const TechItem = styled.li`
  display: inline;
  margin: 0 5px;
  background: #031742ff;
  padding: 5px 10px;
  border-radius: 5px;
`;

const TechIconList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const TechIconItem = styled.div`
  margin: 0 5px;
  font-size: 2rem;
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
  images,
  link,
  techList,
  techIcons,
  onClick,
}) => {
  return (
    <ProjectContainer onClick={onClick}>
      <ProjectImage src={images[0]} alt={title} />
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
        {techIcons && (
          <TechIconList>
            {techIcons.map((Icon, index) => (
              <TechIconItem key={index}>
                <Icon />
              </TechIconItem>
            ))}
          </TechIconList>
        )}
      </Overlay>
    </ProjectContainer>
  );
};

export default Project;
