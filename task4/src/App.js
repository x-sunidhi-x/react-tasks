import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const api="https://dummyjson.com/users";
  const [myData, setMyData] =useState([]);
  useEffect(()=>{
    axios
    .get(api)
    .then((res)=>setMyData(res.data));
  },[]);
  return (
    <div className="App">
      <h1>Dummy data</h1>
      {myData.map((post)=>{
        const {Sno, Profile, FN, LN, Gender,Email, username, domain, ip, uni} =post;
        return (
          <div className='container' key={Sno}>
            <div className='row'> 
            <div className='col-sm'>
              {Sno}
            </div>
            <div className='col-sm'>
              {Profile}
            </div>
            <div className='col-sm'>
              {FN}
            </div>
            <div className='col-sm'>
              {LN}
            </div>
            <div className='col-sm'>
              {Gender}
            </div>
            
          </div>
          </div>

        )
      })}
    </div>
  );
}

export default App;
