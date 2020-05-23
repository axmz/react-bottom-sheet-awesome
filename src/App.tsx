import React from 'react';
import './App.css';
import MenuDrawer from './components/sheet'
import Ruler from './components/ruler'
// import ExampleDark from './components/example-dark'
// import ExampleLight from './components/example-light'
// import Social from './components/example-social'

// const Dev = () => {
//   return (
//     <>
//       <Ruler />
//       <MenuDrawer>
//         <Ruler style={{ height: "auto", backgroundColor: "brown" }} />
//       </MenuDrawer>
//     </>
//   )
// }

const Style = () => {
  return <>
    <MenuDrawer>
      <Ruler style={{ height: "auto", backgroundColor: "transparent" }} />
      {/* <Social/> */}
      {/* <ExampleDark/> */}
      {/* <ExampleLight/> */}
    </MenuDrawer>
  </>
}

const Info = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem", color: "white" }}>
      Try it in DevTools, mobile screen
    </div>
  )
}

function App() {
  return (
    <>
      <Info />
      <Style />
    </>);
  // return (<Dev />);
}

export default App;
