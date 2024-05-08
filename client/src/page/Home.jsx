
import { useEffect, useState } from 'react';
import './App.css';

function Home() {
  const [tempList, setTempList] = useState([])
 
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    fetch("")
    .then(res => res.json())
    .then(json => setTempList(json.users)).catch(e =>{
      console.log("error", e)
    })
  }
  const ascendingEvent = () => {
     let data = [...tempList]
     if(data.length > 0) {
      let result = data.sort((a,b) => a.username.localeCompare(b.username))
      setTempList(result)
     }
  }
  const descendingEvent = () => {
     let data = [...tempList]
     if(data.length > 0) {
      let result = data.sort((a,b) => b.username.localeCompare(a.username))
      setTempList(result)
     }

  }
  return (
    <div className="App" style={{textAlign:'left', width:'50%', margin:'10px auto'}}>
      {
        tempList && tempList.length > 0 && tempList != undefined ? tempList.map((item, i) =>{
            return(
              <div>{item.username}</div>
            )
        }) : "No Data"
      }
      <div style={{marginTon:'20px'}}>
          <button onClick={ascendingEvent}>Ascending</button>
          <button style={{margin:'10px'}} onClick={descendingEvent}>Descending</button>
          <button onClick={fetchData}>Prev Data</button>
      </div>

    </div>
  );
}

export default Home;