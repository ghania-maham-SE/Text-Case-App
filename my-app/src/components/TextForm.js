
import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{ 
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText (newText)

  }
  const handleLoClick = ()=>{ 
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText (newText)
  }
  const handleClearClick = ()=>{ 
    console.log("Cleartext was clicked");
    let newText = '';
    setText (newText)
  }

  const handleOnChange = (event)=>{ 
    console.log("On change");
    setText(event.target.value)
  }
 const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleUpClick}> Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
    </div>
    <div className="container my-3">
      <h2> Your Text Summary </h2>
      <p> {text.split(" ").length} words and {text.length} charachters</p>
      <p> {0.008 * text.split(" ").length }Minutes Read</p>
      <h2> Preview </h2>
      <p> {text}</p>
    </div>
    </>
  )
}
