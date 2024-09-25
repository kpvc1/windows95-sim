// Taskbar.js
import React, { useState } from 'react';
import StartMenu from './StartMenu';
import styled from 'styled-components';

const TaskbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const StartButton = styled.button`
  background: #c3c3c3;
  border: none;
  padding: 0px;
  font-weight: bold;
  width:40px;
  z-index: 3;
  margin-left: 5px;
`;

const TimeDisplay = styled.div`
  margin-right: 20px;
`;

const Taskbar = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  return (
    <TaskbarContainer>
      <StartButton><button onClick={() => setIsStartMenuOpen(!isStartMenuOpen)} class="w95"><img width="18" height="18" src="https://img.icons8.com/fluency/18/windows-95.png" alt="windows-95"/>Start</button></StartButton>
      <StartMenu visible={isStartMenuOpen} />
      <TimeDisplay><div>{new Date().toLocaleTimeString()}</div></TimeDisplay>
    </TaskbarContainer>
  );
};

export default Taskbar;
