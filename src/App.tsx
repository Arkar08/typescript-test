import { useEffect, useState } from 'react';
import './App.css'
import Search from './components/Search';
import Show from './components/Show';
import axios from 'axios';

const App=()=> {

  type Todo ={
    id:number
    name:string,
  }

  const [data, setData] = useState<Todo []>([]);
  const [newData , setNewData] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);


  const getData  = async()=>{
    setLoading(true)
    await axios.get('http://localhost:3000/data')
    .then(res=>{
     setData(res.data)
     setLoading(false)
    })
    .catch(err=>console.log(err.message))
  }

  useEffect(()=>{
    getData()
  },[])

  const handleClick =async ()=>{
    const newTodo :Todo={
      id:data.length+1,
      name:newData
    }
    await axios.post('http://localhost:3000/data',newTodo)
    .then(res=>{
      console.log(res.data)
      window.location.reload()
    })
    .catch(err=>console.log(err.message))
  }

  const handleDelete =async (id:number)=>{
    const confirm = window.confirm('Are you want to delete?')
    if(confirm){
      await axios.delete('http://localhost:3000/data'+id)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err.message))
    }
  }
  return (
    <div className='app'>
      {loading ? <div>loading....</div>: <div className='box'>
      <h1 className="header">Note</h1>
      <Search handleClick={handleClick} setNewData={setNewData}/>
      <Show data={data} handleDelete={handleDelete}/>
      </div>}
     
    </div>
  )
}

export default App
