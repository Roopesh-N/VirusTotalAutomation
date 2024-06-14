
import { useEffect, useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './utils/ratingsSlice';
import Result from './components/Result';

function App() {
  const dispatch=useDispatch();

  const InputValue=useRef("");
  const allratings=useSelector((store)=>store.domainRatings.items)
  var temp=[];

  useEffect(()=>{
    // console.log(allratings)
  },[allratings])

  const getdomaindetails=async(domain)=>{
    try{
    const data= await fetch('http://localhost:5000/api/domain/'+domain);
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }else{
    const jsondata= await data.json();
    // console.log(jsondata);
      temp.push({id:jsondata?.data?.id, stats:jsondata?.data?.attributes?.last_analysis_stats });
    }
      }
    catch(error){
      console.log(error);
    }
  }

  const getresults=async ()=>{
    const alldomains=InputValue.current.value;
    const listOfDomains=alldomains.split(",");
    // console.log(listOfDomains)
    for(let i=0;i<listOfDomains.length;i++){
      var dom=listOfDomains[i].trim()
      await getdomaindetails(dom)
    }
    // console.log(temp)
    dispatch(addItem(temp))

  }
  

  return (
    <div className="text-center m-36">
      <input className='border border-black p-2 w-80'  ref={InputValue} placeholder='Enter Domain Names'></input>
      <button className='bg-blue-600 text-white p-2 m-2 rounded-md w-20' onClick={getresults}>Submit</button>
      <div className='m-16'>
        {allratings.length>0 &&
        <table>
          <thead>
            <tr className='h-12'>
              <th className='border border-black w-40'>Domain Name</th>
              <th className='border border-black w-40'>Malicious</th>
              <th className='border border-black w-40'>Suspicious</th>
              <th className='border border-black w-40'>Undetected</th>
              <th className='border border-black w-40'>Harmless</th>
              <th className='border border-black w-40'>Timeout</th>
              <th className='border border-black w-40'>Total Ratings</th>
            </tr>
          </thead>
        </table>}
          {allratings.map((each)=><Result  key={each?.id} id={each?.id} stats={each?.stats} />)}
      </div>
    </div>
  );
}

export default App;
