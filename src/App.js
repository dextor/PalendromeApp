import {useState} from 'react';
import './App.css';

function App() {

  let input;
  const [palendromeResultMessage, setPalendromeResultMessage] = useState(false);


  function reverseWord(text) {
    let reversed = [];
    for (let i = text.length-1; i >= 0; i--) {
      reversed.push(text[i]);
    }
    return reversed.join('');
  }

  function checkIfMatches(input, reversed) {
    if(input === reversed) {
      return true;
    }
    else {
      return false;
    }
  }

  function showResult(isMatch) {
    if(isMatch) {
      setPalendromeResultMessage('It\'s a Palendrome! :)');
    }
    else {
      setPalendromeResultMessage('Not a Palendrome :(');
    }
  }



  function handleInputChange(e) {
    input = e.target.value;
    setPalendromeResultMessage('');
  }


  function handleSubmit(e) {
    e.preventDefault();
    const reversed = reverseWord(input);
    const isPalendrome = checkIfMatches(input, reversed);
    showResult(isPalendrome);
  }



  return (
    <div className="App">
      <div className='palendrome-main'>
        
        <div className='inputs-container'>
          <input type="text" onChange={ (e) => handleInputChange(e) } />
          <button onClick={(e) => handleSubmit(e) }>Submit</button>
        </div>
        
        <div className='result-message'>
          { palendromeResultMessage }
        </div>

      </div>
    </div>
  );
}

export default App;
