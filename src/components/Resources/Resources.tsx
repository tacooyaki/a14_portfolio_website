import React from 'react';
import styled from 'styled-components';
import { ResourcesProps } from './Resources.types';

const ResourcesContainer = styled.div`
  margin: 20px 0;
`;

const ResourceItem = styled.div`
  margin: 10px 0;
  border: 1px solid #ddd;
  padding: 10px;
`;

const ResourceTitle = styled.h3`
  margin: 0;
`;

const ResourceImage = styled.img`
  width: 100px;
  height: auto;
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
          <ResourceTitle>{resource.title}</ResourceTitle>
          <ResourceImage src={resource.image} alt={resource.title} />
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
