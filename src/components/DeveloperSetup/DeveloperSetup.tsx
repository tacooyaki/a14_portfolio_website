import React from 'react';
import styled from 'styled-components';
import { DeveloperSetupProps } from './DeveloperSetup.types';

const SetupContainer = styled.div`
  margin: 20px 0;
`;

const SetupSection = styled.div`
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
        <h3>JetBrains WebStorm Setup</h3>
        <p>{webstormSetup}</p>
      </SetupSection>
      <SetupSection>
        <h3>Terminal Setup</h3>
        <p>{terminalSetup}</p>
      </SetupSection>
      <SetupSection>
        <h3>Preferred Editor Font</h3>
        <p>{preferredFont}</p>
      </SetupSection>
    </SetupContainer>
  );
};

export default DeveloperSetup;
