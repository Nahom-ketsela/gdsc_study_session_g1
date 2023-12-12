import {useState} from 'react';
import Group10Members from './Group10Members';
import './Group10Members.css';

import img from "./image/aastu.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Group 1 members are:</h2>
      <Group10Members />

      <img src={img} className="group-image"></img>
    </>
  );
}

export default App;