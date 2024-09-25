import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const WindowContainer = styled.div`
  width: 30vw;
  height: 80vh;
  z-index: 2;
  position: relative;
  left:50%
  top:50%
  background: rgba( 0, 0, 0, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 0px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const WindowHeader = styled.div`
  background-color: #81007b;
  color: white;
  padding: 5px;
  cursor: move;
`;

const WindowContent = styled.div`
  padding: 10px;
  background-color: #111;
  height: 100%;
  color: #fff;
  background: rgba( 0, 0, 0, 0 );

`;

const Window = ({ title, children }) => {
  return (
    <Draggable>
      <WindowContainer>
        <WindowHeader>{title}</WindowHeader>
        <WindowContent>{children}</WindowContent>
      </WindowContainer>
    </Draggable>
  );
};

export default Window;
