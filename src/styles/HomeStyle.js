import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #007bff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SkillBadge = styled.span`
  background: ${props => props.dark ? '#333' : '#e9ecef'};
  color: ${props => props.dark ? '#fff' : '#333'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem;
  display: inline-block;
  font-weight: 500;
  border: 1px solid #007bff;
`;