import { useState,useEffect, useRef} from 'react';
import {db} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function WorkerPage() {
  const [typeArray,setTypeArray] = useState([]);
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [availability,setAvailability] = useState('Yes');
  useEffect(()=>{
    const fetchdata = () =>{
      const typeList = require("../component/homecomponent/json/categoriesJson.js")
      const temptypeArray = typeList.map((item) => item.type);
      setTypeArray([...temptypeArray]);
    }
    fetchdata();
  },[])
  const handleOptionChange = (event) => {
    setProfession(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setAvailability('Yes');
    try {
      await addDoc(collection(db, "worker"), {
        name,
        profession,
        email,
        availability,
        phone,
        address1,
        address2,
        pincode,
        state,
        country,
        age,
      });
      console.log("Worker added successfully");
    } catch (error) {
      console.error("Error adding worker:", error);
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <select className="form-control" id="profession" value={profession} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            {typeArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address Line 1:</label>
          <input type="text" className="form-control" id="address1" value={address1} onChange={(event) => setAddress1(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address Line 2:</label>
          <input type="text" className="form-control" id="address2" value={address2} onChange={(event) => setAddress2(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" className="form-control" id="pincode" value={pincode} onChange={(event) => setPincode(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" className="form-control" id="state" value={state} onChange={(event) => setState(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" className="form-control" id="country" value={country} onChange={(event) => setCountry(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="text" className="form-control" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Worker</button>
      </form>
    </div>
  );
  
}

export default WorkerPage;
