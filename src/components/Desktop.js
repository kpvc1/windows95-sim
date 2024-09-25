import React from 'react';
import './Desktop.css'; // Import the CSS file
import Taskbar from './Taskbar';
import Window from './Window';


const Desktop = () => {
  return (
    <div className="desktop">
      {/* Add more windows */}
      <Window title="My Games">
      <img width="96" height="96" src="https://img.icons8.com/color/96/chessboard.png" alt="chessboard"/>
      <img width="96" height="96" src="https://img.icons8.com/color/96/cards.png" alt="cards"/>
      <img width="96" height="96" src="https://img.icons8.com/color/96/apple-arcade.png" alt="apple-arcade"/>
      

      </Window>
      
      <Taskbar />
      <div class="bg-foreground"></div>
      <a href="#" class="glow"></a>
    </div>
  );
};

export default Desktop;