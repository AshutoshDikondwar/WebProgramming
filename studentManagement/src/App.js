import { useState } from 'react';
import './App.css';
import DisplayTable from './components/DisplayTable';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';



function App() {
  const [data, setData] = useState([{ empid: 1, ename: "abc", sal: 12 },
  { empid: 2, ename: "def", sal: 13 },
  { empid: 3, ename: "ghi", sal: 14 },
  ])

  const alterInfo = (info) => {
    console.log("info: ", info);
    setData([...data, info])
  }



  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayTable student={data} sendData={alterInfo} />} />
          <Route path="/edit/emp/:id" element={<Update info={data}/>} />

        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;

