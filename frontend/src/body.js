import {React,useState} from 'react';
import './App.css';
import axios from 'axios';
function Body() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [steps, setSteps] = useState('');
  const instance = axios.create();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('http://localhost:5000/api/addition', {
        num1: parseInt(num1),
        num2: parseInt(num2)
      })
       setSteps(JSON.stringify(response.data))
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
    <form >
      <label htmlFor="num1" className='form'>Number 1: </label>
      <input
        type="text"
        id="num1"
        className='form1'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        required
      />
      <br />
      <label htmlFor="num2" className='form'>Number 2: </label>
      <input
        type="text"
        id="num2"
        className='form2'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        required
      />
      <br />
      <button type="submit" onClick={handleSubmit}  className='button'>Generate Steps</button>
    </form>
    <pre>{steps}</pre>
  </div>
  )
}

export default Body