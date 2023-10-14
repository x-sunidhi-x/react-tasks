import {useState,useRef} from 'react';

function WordCount(props){

    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = (e) => {
      const text = textAreaRef.current.value;
      setWordCount(text.split(" ").length);
    }

    return (
        <div className='shadow-sm m-5 pb-5' style={{fontFamily:"serif"}}>
            <h2>Responsive Paragraph Word Counter</h2>
          <textarea onChange={countWords} ref={textAreaRef} /><br />
          
          <p>Word Count: {wordCount} </p>
        </div>
    )
}

export default WordCount;