import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={e => alert(e.target)}>hello</Button>
        <Button disabled>disabled button</Button>
        <Button size='lg'>large button</Button>
        <Button size='sm'>small button</Button>
        <Button disabled>hello</Button>
        <Button btnType='primary' >primary</Button>
        <Button btnType='danger' >danger</Button>
        <Button btnType='default' >default</Button>
        <Button btnType='link' href='http://www.baidu.com' target="_blank">baidu</Button>
        <Button btnType='link' disabled >button disabled</Button>
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
