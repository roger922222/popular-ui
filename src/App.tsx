import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={index => alert(index)} mode='vertical' defaultOpenSubMenus={['2']}>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem  disabled>
            cool link 2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem >
              dropdown 1
            </MenuItem>
            <MenuItem  disabled>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link 4
          </MenuItem>
        </Menu>
        <Button onClick={e => alert(e.target)}>hello</Button>
        <Button disabled>disabled button</Button>
        <Button size={ButtonSize.Large}>large button</Button>
        <Button size={ButtonSize.Small}>small button</Button>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} >primary</Button>
        <Button btnType={ButtonType.Danger} >danger</Button>
        <Button btnType={ButtonType.Default} >default</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' target="_blank">baidu</Button>
        <Button btnType={ButtonType.Link} disabled >button disabled</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
