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
      <Ruler style={{ height: "auto", backgroundColor: "transparent" }}/>
      {/* <Social/> */}
      {/* <ExampleDark/> */}
      {/* <ExampleLight/> */}
    </MenuDrawer>
  </>
}

function App() {
  return (<Style />);
  // return (<Dev />);
}

export default App;
