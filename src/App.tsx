import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu, MenuTrigger, MenuButton, MenuItem, MenuPopover, MenuList } from '@fluentui/react-components';

function App() {
  return (
    <div 
      className="App"
    >
      <div className="menuButtons">
        <Menu>
          <MenuTrigger>
            <MenuButton size='large'>Dis</MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>Dis</MenuItem>
              <MenuItem>Logos</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger>
            <MenuButton size='large'>Dis</MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>Dis</MenuItem>
              <MenuItem>Logos</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger>
            <MenuButton size='large'>Dis</MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>Dis</MenuItem>
              <MenuItem>Logos</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </div>
  );
}

export default App;
