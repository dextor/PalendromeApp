import { useState } from 'react';
import './App.css';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [palendromeResultMessage, setPalendromeResultMessage] = useState(false);
  const [resultStatus, setResultStatus] = useState('fail');



  function reverseWord(text) {
    let reversed = [];
    for (let i = text.length-1; i >= 0; i--) {
      reversed.push(text[i]);
    }
    return reversed.join('');
  }



  function checkIfMatches(input, reversed) {
    if(input === reversed) { return true; }
    return false;
  }



  function showResult(isMatch) {
    if(isMatch) {
      setPalendromeResultMessage(`is a Palendrome! :) :) :)`);
      setResultStatus('success');
    }
    else {
      setPalendromeResultMessage(`is not a Palendrome :( :( :(`);
      setResultStatus('fail');
    }
  }



  function handleInputChange(e) {
    setInputText(e.target.value);
    setPalendromeResultMessage('');
    setResultStatus('');
  }



  function handleSubmit(e) {
    e.preventDefault();
    if(inputText){
      const reversed = reverseWord(inputText);
      const isPalendrome = checkIfMatches(inputText, reversed);
      showResult(isPalendrome);
    }
    else {
      setPalendromeResultMessage('Input some text first!');
      setResultStatus('fail');
    }
  }



  return (
    <div className="App">
      <div className='palendrome-main'>
        <h1>Test Your Palendrome Writing Skills</h1>
        <div className='inputs-container'>
          <input 
            type="text" 
            value={inputText}
            onChange={ (e) => handleInputChange(e) } 
          />
          <button onClick={(e) => handleSubmit(e) }>Submit</button>
        </div>
        
        <div className={`result-message ${resultStatus}`}>
          <span className='input-text'>{ inputText }</span> { palendromeResultMessage }
        </div>

      </div>
    </div>
  );
}

export default App;
