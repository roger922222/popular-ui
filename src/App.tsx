import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
