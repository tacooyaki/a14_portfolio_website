import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #1a1a1a;
  color: white;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #ccc;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
  @media (min-width: 768px) {
    font-size: 3.9rem;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ddd;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.a<{ primary?: string }>`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  background-color: ${(props) =>
    props.primary === 'true' ? '#4caf50' : '#333'};
  &:hover {
    background-color: ${(props) =>
      props.primary === 'true' ? '#45a049' : '#555'};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;

const BasicInformation: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <TextContainer>
          <Title>
            <IntroText>Hi, my name is Patrick Mercredi.</IntroText>I create
            innovative web solutions
          </Title>
          <Subtitle>
            I&apos;m a full stack web developer specializing in creating
            seamless and engaging digital experiences. With expertise in modern
            web technologies like React, Ruby, and PHP, I focus on building
            adaptative, user-friendly applications. Currently, I&apos;m focused
            on developing scalable, interactive PWAs that enhance user
            engagement and accessibility.
          </Subtitle>
          <ButtonContainer>
            <Button href="#contact" primary="true">
              Work With Me
            </Button>
            <Button href="#projects">See My Past Work</Button>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <Image src="./images/hero.jpg" alt="Coding" />
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default BasicInformation;
