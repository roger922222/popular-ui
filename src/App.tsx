import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Alert from './components/Alert/alert'
import Tabs from './components/Tabs/tabs'
import TabsItem from './components/Tabs/tabsItem'

library.add(fas)

export interface AppProps {}

const App: React.FC<AppProps> = props => {

  const [ showAlert, setShowAlert ] = useState(false)

  const ok = () => {
    setShowAlert(false)
  }

  const cancel = () => {
    setShowAlert(false)
  }

  const tabs = () => {
    return <div>
      1234
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <Tabs onSelect={index => alert(index)} defaultIndex={0}>
          <TabsItem tabs={tabs()}>
              <div>
                <div>1234</div>
                <div>5678</div>
              </div>
          </TabsItem>
          <TabsItem tabs='tabs 2' disabled>this is a content2</TabsItem>
          <TabsItem tabs='tabs 3'>this is a content3</TabsItem>
        </Tabs>
        <Icon icon='arrow-down' theme='primary' size='10x' />
        <Menu defaultIndex='0' onSelect={index => alert(index)} mode='horizontal' defaultOpenSubMenus={['2']}>
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
        <Button onClick={e => setShowAlert(true)}>hello</Button>
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
      {
          showAlert ? <Alert
            title='跨越速运'
            text='首次寄递，全程免费' 
            type='success'
            textOk='确定'
            textCancel='取消'
            ok={ok}
            cancel={cancel}
          /> : null
        }
    </div>
  );
}

export default App;
