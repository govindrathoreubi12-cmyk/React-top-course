import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import { toast } from 'react-toastify';
import './App.css'
import { apiUrl, filterData } from './data';
import Spinner  from './component/Spinner';

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
   const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let respose = await fetch(apiUrl);
      let output = await respose.json();
      //output 
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong")
    }
    setLoading(false);
  }
useEffect( () => {
  fetchData();
} , []);

  

  return (
  <div className=' min-h-screen flex flex-col bg-gray-800'>
    <div>
    <Navbar/> 
    </div>
    <div className=" bg-gray-800">
    <div>
  <Filter 
     filterData={filterData}
     category={category}
     setCategory={setCategory}/>
  </div>
   <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]'>
   {
    loading ? (<Spinner/>) : (<Cards courses={courses} category={category}></Cards>)
   }
   </div>
    </div>
  
   
  </div>
  )
}

export default App;
