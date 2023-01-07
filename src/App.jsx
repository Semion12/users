import './App.css';
import Users from './components/users';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Succes } from './components/succes';

import { Error } from './components/modal';

function App() {
  const [users, setUsers] = useState([])
  const [value, setValue] = useState('')
  const [invites, setInvites] = useState([])
  const [succes, setSucces] = useState(false)
  const [unsucces, setUnsucces] = useState(false)

  const clickContinue = () => {

    if (invites.length > 0) {
      setSucces(!succes)
    } else {
      setUnsucces(true)
    }
  }
  const clickSucces = ()=>{
    setSucces(!succes)
    setInvites([])
  }

  const isUnsucces = () => {
    setUnsucces(false)
  }



  useEffect(() => {
    axios.get('https://reqres.in/api/users').then((data => {
      setUsers(data.data.data)
    }))
  }, [])
  const changeValue = (e) => {
    setValue(e)
  }
  const changeInvites = (id) => {

    if (invites.includes(id)) {
      const newArr = invites.filter(val => val !== id)
      setInvites(newArr)

    } else {
      setInvites([...invites, id])
    }
  }
  return (
    <div>



      {!succes
        ? <Users clickContinue={clickContinue} invites={invites} changeInvites={changeInvites} changeValue={changeValue} value={value} users={users} />
        : <Succes clickSucces={clickSucces} invites={invites} />}
      <Error unsucces={unsucces} isUnsucces={isUnsucces} />
    </div>
  );
}

export default App;
