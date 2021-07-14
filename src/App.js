import React,{useEffect,useState} from 'react';
import bootstrap from 'bootstrap';
function App() {
  const[data,setData]=useState([]); 
  console.log(data);
  useEffect(()=>{
    fetch('https://api.covid19india.org/data.json').then(response=>response.json()).then(jsondata=>setData(jsondata.statewise));
  },[])
  return (
    <div className="App">
      <center>
     <h1>INDIA COVID-19 DASHBOARD</h1>
     <table className="table">
       <thead className="table-dark">
         <tr>
           <th>State</th>
           <th>Confirmed</th>
           <th>Recovered</th>
           <th>Deaths</th>
           <th>Active</th>
           <th>LastUpdates</th>
         </tr>
       </thead>
       <tbody>
         {
           data.map((item,i)=>{
            return(
            <tr key={i}>
            <td>{item.state}</td>
            <td>{item.confirmed}</td>
            <td>{item.recovered}</td>
            <td>{item.deaths}</td> 
            <td>{item.active}</td>
            <td>{item.lastupdatedtime}</td>
          </tr>
            )
         })}
       </tbody>
     </table>
     </center>
    </div>
  );
}

export default App;
