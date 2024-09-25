import React, { useState } from 'react';
import styled from 'styled-components';

const StartMenuContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 200px;
  background-color: gray;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border: 2px solid black;
`;

const StartMenuItem = styled.div`
  padding: 10px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
  }
    font-family: Tahoma;
    font-size:14px;
    font-weight:bold;

`;

const StartMenu = ({ visible }) => {
  return (
    <StartMenuContainer visible={visible}>
      <StartMenuItem>My Computer</StartMenuItem>
      <StartMenuItem>Documents</StartMenuItem>
      <StartMenuItem>Games</StartMenuItem>
      <StartMenuItem>Projects</StartMenuItem>
      <StartMenuItem>Sketches</StartMenuItem>
      <StartMenuItem>Contact</StartMenuItem>
    </StartMenuContainer>
  );
};

export default StartMenu;
