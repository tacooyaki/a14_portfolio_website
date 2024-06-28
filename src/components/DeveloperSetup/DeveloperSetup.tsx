import React from 'react';
import styled from 'styled-components';
import { DeveloperSetupProps } from './DeveloperSetup.types';
import { AiFillTool, AiFillCode } from 'react-icons/ai';
import { FiTerminal } from 'react-icons/fi';

const SetupContainer = styled.div`
  margin: 20px 0;
  color: white;
  text-align: center;
`;

const SetupSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const SetupContent = styled.div`
  background: #031742ff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: left;
  flex: 1;
`;

const SetupImage = styled.img`
  width: 550px;
  height: auto;
  border-radius: 5px;
  border: 2px solid #ddd;
`;

const SetupTitle = styled.h3`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SetupParagraph = styled.p`
  margin: 10px 0;
`;

const DeveloperSetup: React.FC<DeveloperSetupProps> = ({
  webstormSetup,
  terminalSetup,
  preferredFont,
}) => {
  return (
    <SetupContainer>
      <SetupSection>
        <SetupContent>
          <SetupTitle>
            <AiFillTool /> JetBrains Setup
          </SetupTitle>
          <SetupParagraph>{webstormSetup}</SetupParagraph>
        </SetupContent>
        <SetupImage src="/images/jetbrains-setup.png" alt="JetBrains Setup" />
      </SetupSection>
      <SetupSection>
        <SetupContent>
          <SetupTitle>
            <AiFillCode /> Preferred Editor Font
          </SetupTitle>
          <SetupParagraph>{preferredFont}</SetupParagraph>
        </SetupContent>
        <SetupImage src="/images/editor-font.png" alt="Preferred Editor Font" />
      </SetupSection>
      <SetupSection>
        <SetupContent>
          <SetupTitle>
            <FiTerminal /> Terminal Setup
          </SetupTitle>
          <SetupParagraph>{terminalSetup}</SetupParagraph>
        </SetupContent>
        <SetupImage src="/images/terminal-setup.png" alt="Terminal Setup" />
      </SetupSection>
    </SetupContainer>
  );
};

export default DeveloperSetup;
