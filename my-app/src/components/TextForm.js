import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert('text has been converted to upper case', 'success');

  }

  const handlelowClick = () => {
    // console.log("upper case was clicked" + text);
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert('text has been converted to Lower case', 'success');

  }
  const handleExtraspaces = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert('ExtraSpaces has been  !', 'success');

  }

  const handleClearClick = () => {
    // console.log("upper case was clicked" + text);
    let NewText = ('');
    setText(NewText);
    props.showAlert('text has been cleared', 'success');
  }

  const handleOnchange = (event) => {
    //  console.log("On change");
    setText(event.target.value);
  }





  const [text, setText] = useState('')
  // text = "new text"; wrong way to chnage the state
  //setText('hey hello');


  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="MyBox" rows="8"></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to upper case</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Convert to lower case</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleExtraspaces}>Remove Extra Space</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>clear</button>
          

        </div>

      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='my-2' >  Your Text Summary</h1>
        <p className='my-2'>word {text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h1 className='my-3'>Preview</h1>
        <p>{text.length > 0 ? text : 'Enter Your Text Above to See Preview'}</p>
      </div>
    </>
  )
}
