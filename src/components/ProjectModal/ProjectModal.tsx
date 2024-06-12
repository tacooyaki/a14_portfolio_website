import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProjectProps } from '../Project';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #0066ff;
  }
`;

const ProjectModal: React.FC<{
  project: ProjectProps;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === 'modal-overlay') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <ModalOverlay id="modal-overlay">
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: 'auto' }}
        />
        <p>{project.description}</p>
        <ul>
          {project.techList.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
