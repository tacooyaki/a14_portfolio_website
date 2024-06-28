import React from 'react';
import styled from 'styled-components';
import { SkillsProps } from './Skills.types';

const SkillsContainer = styled.div`
  margin: 20px 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  background: #031742ff;
  padding: 7px;
  border-radius: 5px;
  min-width: 270px;
  min-height: 45px;
  //justify-content: center;
`;

const SkillIcon = styled.div`
  margin-right: 10px;
  font-size: 2.2em;
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const Skills: React.FC<SkillsProps> = ({
  description,
  languages,
  frameworks,
  tools,
}) => {
  const renderSkills = (
    skills: { name: string; icon: React.ComponentType }[],
  ) =>
    skills.map((skill, index) => {
      const Icon = skill.icon;
      return (
        <SkillItem key={index}>
          <SkillIcon>
            <Icon />
          </SkillIcon>
          {skill.name}
        </SkillItem>
      );
    });

  return (
    <SkillsContainer>
      <p>{description}</p>
      <SkillsRow>
        <SkillsSection>
          <SectionTitle>Languages</SectionTitle>
          <SkillsList>{renderSkills(languages)}</SkillsList>
        </SkillsSection>
        <SkillsSection>
          <SectionTitle>Frameworks</SectionTitle>
          <SkillsList>{renderSkills(frameworks)}</SkillsList>
        </SkillsSection>
        <SkillsSection>
          <SectionTitle>Tools</SectionTitle>
          <SkillsList>{renderSkills(tools)}</SkillsList>
        </SkillsSection>
      </SkillsRow>
    </SkillsContainer>
  );
};

export default Skills;
