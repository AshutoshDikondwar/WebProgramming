import { useState } from 'react';
import './App.css';
import DisplayTable from './components/DisplayTable';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [data, setData] = useState([{ roll: 1, name: "abc", age: 12 },
  { roll: 2, name: "def", age: 13 },
  { roll: 3, name: "ghi", age: 14 },
  ])

  const alterInfo = (info) => {
    console.log("info: ", info);
    setData([...data, info])
  }



  return (
    <div >

      <DisplayTable student={data} sendData={alterInfo} />

    </div>
  );
}

export default App;

