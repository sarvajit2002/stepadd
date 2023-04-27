import {React,useState} from 'react';
import './App.css';
function Body() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [steps, setSteps] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const response = await fetch('/api/addition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2 }),
      });
      const data = await response.json([]);
     setSteps(data.steps);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <form onsubmit={handleSubmit>
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
