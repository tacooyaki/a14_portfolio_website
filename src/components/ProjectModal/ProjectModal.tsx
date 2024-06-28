import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProjectProps } from '../Project';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: rgba(5, 19, 18, 0.86);
  padding: 20px;
  width: 80%;
  max-width: 995px;
  position: relative;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 800px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  padding: 0 10px;
`;

const PrevButton = styled(NavButton)`
  left: -20px;
`;

const NextButton = styled(NavButton)`
  right: -20px;
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
  background: rgba(19, 22, 42, 0.66);
  padding: 5px 10px;
  border-radius: 5px;
`;

interface ProjectModalProps {
  project: ProjectProps;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id === 'modal-overlay') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <ModalOverlay id="modal-overlay">
      <ModalContent>
        <CloseButton onClick={onClose} />
        <h2>{project.title}</h2>
        <ImageContainer>
          <PrevButton onClick={handlePrevClick}>
            <FaChevronLeft />
          </PrevButton>
          <Image src={project.images[currentImageIndex]} alt={project.title} />
          <NextButton onClick={handleNextClick}>
            <FaChevronRight />
          </NextButton>
        </ImageContainer>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <TechList>
          {project.techList.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
