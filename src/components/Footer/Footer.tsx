import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #1a1a1a;
  color: rgba(204, 204, 204, 0.99);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      Designed and developed in WebStorm. Built with React, TypeScript, and
      Styled-Components, deployed with Docker.
    </FooterContainer>
  );
};

export default Footer;
