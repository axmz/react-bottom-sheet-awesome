import React from 'react';
import './App.css';
import MenuDrawer from './components/sheet'
import Ruler from './components/ruler'
import Example from './components/example'

const Dev = () => {
  return (
    <>
      <Ruler />
      <MenuDrawer>
        <Ruler style={{ height: "auto", backgroundColor: "brown" }} />
      </MenuDrawer>
    </>
  )
}

const Style = () => {
  return <>
    <MenuDrawer>
      <Example/>
    </MenuDrawer>
  </>
}

function App() {
  return (<Style />);
  // return (<Dev />);
}

export default App;
