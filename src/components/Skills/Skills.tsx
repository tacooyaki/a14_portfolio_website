import React from 'react';
import styled from 'styled-components';
import { SkillsProps } from './Skills.types';

const SkillsContainer = styled.div`
  margin: 20px 0;
`;

const SkillsSection = styled.div`
  margin: 10px 0;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: inline;
  margin-right: 10px;
  background: #031742ff;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Skills: React.FC<SkillsProps> = ({
  description,
  languages,
  frameworks,
  tools,
}) => {
  return (
    <SkillsContainer>
      <p>{description}</p>
      <SkillsSection>
        <h3>Languages</h3>
        <SkillsList>
          {languages.map((language, index) => (
            <SkillItem key={index}>{language}</SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>
      <SkillsSection>
        <h3>Frameworks</h3>
        <SkillsList>
          {frameworks.map((framework, index) => (
            <SkillItem key={index}>{framework}</SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>
      <SkillsSection>
        <h3>Tools</h3>
        <SkillsList>
          {tools.map((tool, index) => (
            <SkillItem key={index}>{tool}</SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills;
