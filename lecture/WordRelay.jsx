const React = require("react");
const { useState,useRef } = React;


const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.children.word.value);
    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      e.target.children.word = '';
    
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      e.target.children.word = '';
    
      inputRef.current.focus();
    }
  };

  
    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <input
            id="word"
            defaultValue="제로초"
            ref={inputRef}
           
          />
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </>
    );
  
}
module.exports = WordRelay;
