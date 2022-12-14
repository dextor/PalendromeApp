import {useState} from 'react';
import './App.css';

function App() {

  let input;
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
    if(input === reversed) {
      return true;
    }
    else {
      return false;
    }
  }

  function showResult(isMatch) {
    if(isMatch) {
      setPalendromeResultMessage('(: (: (: It\'s a Palendrome! :) :) :)');
      setResultStatus('success');
    }
    else {
      setPalendromeResultMessage('): ): ): Not a Palendrome :( :( :(');
      setResultStatus('fail');
    }
  }
  


  function handleInputChange(e) {
    input = e.target.value;
    setPalendromeResultMessage('');
  }


  function handleSubmit(e) {
    e.preventDefault();
    if(input){
      const reversed = reverseWord(input);
      const isPalendrome = checkIfMatches(input, reversed);
      showResult(isPalendrome);
    }
  }



  return (
    <div className="App">
      <div className='palendrome-main'>
        <h1>Test Your Palendrome Writing Skills</h1>
        <div className='inputs-container'>
          <input type="text" onChange={ (e) => handleInputChange(e) } />
          <button onClick={(e) => handleSubmit(e) }>Submit</button>
        </div>
        
        <div className={`result-message ${resultStatus}`}>
          { palendromeResultMessage }
        </div>

      </div>
    </div>
  );
}

export default App;
