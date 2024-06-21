import React from 'react';
import styled from 'styled-components';
import { ResourcesProps } from './Resources.types';

const ResourcesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 20px; /* space between items */
`;

const ResourceItem = styled.div`
  flex: 1 1 calc(50% - 20px); /* 50% width minus the gap */
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box; /*  padding and border in the element's total width and height */
`;

const ResourceTitle = styled.h3`
  margin: 0;
`;

const ResourceImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px; /* space below the image */
`;

const ResourceLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Resources: React.FC<ResourcesProps> = ({ resources }) => {
  return (
    <ResourcesContainer>
      {resources.map((resource, index) => (
        <ResourceItem key={index}>
          <ResourceImage src={resource.image} alt={resource.title} />
          <ResourceTitle>{resource.title}</ResourceTitle>
          <p>{resource.summary}</p>
          <ResourceLink
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resource
          </ResourceLink>
        </ResourceItem>
      ))}
    </ResourcesContainer>
  );
};

export default Resources;
