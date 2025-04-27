import { useState } from 'react';
import './App.css';


/*
The BackgroundColorInputForm function takes a variable textColor, and a function
setBackgroundColor as input.
This function renders an input form and a submit button on the page.
User can input a color (in hex code), click the submit and can see the change 
of the background color of the page.
*/
function BackgroundColorInputForm({ textColor, setBackgroundColor }) {

  //define a variable and function that stores input and reacts to the input
  const [color, setColor] = useState('');

  // when user has click the submit button , this function will be triggered
  const handleSubmit = (event) => {
    // preventthe form from resetting itself
    event.preventDefault();

    // set the Backgroundcolor function to update the background color
    setBackgroundColor(color);
    alert(`The backgroundColor you picked is: ${color}`);
  };

  // when user change text in the textbox, update the color variable
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };


  //below is html and jsx(javascript) code, it renders a input form and submit button
  return (

    /* submission event should be handled by form, in here, submission event is
       detected when user clicks a button of type="submit", and then 'onSubmit'
       event is handled in the 'handleSubmit' function
    */
    <form onSubmit = {handleSubmit}>
      <label style={{ color: textColor }}>set your background color (Enter HEX code): <br/>
        <input 
          type="text"
          value={color}
          /* whenever event occurs, that is, when the input in the form changed, 
           update the color variable with the input input in the form. 
           And e.targer.value represents input in the form */
          onChange={handleInputChange}
        />
      </label>

      {/* set type = "submit" means it is a default button used to submit the 
      form's data. When the button is clicked, the browser tries to submit the
       form data.*/}
      <button
        type="submit"
      >
      submit
      </button>
    </form>

  )
} 


/*
The TextColorInputForm function takes a variable textColor, and a function
setTextColor as input.
This function renders an input form and a submit button on the page.
User can input a color (in hex code), click the submit and can see the change 
of color of all the text in the page.
*/
function TextColorInputForm({ textColor, setTextColor }) {
  //define a variable and function that stores input and reacts to the input
  const [color, setColor] = useState('');

  // when user has click the submit button , this function will be triggered
  const handleSubmit = (event) => {
    // prevent the form from resetting itself
    event.preventDefault();
    setTextColor(color);
    alert(`The text color you picked is: ${color}`);

  };

  // when user change text in the textbox, update the color variable
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  //below is html and jsx(javascript) code, it renders a input form and submit button
  return (

    /* submission event should be handled by form, in here, submission event is detected
       when user clicks a button of type="submit", and then 'onSubmit' event is
       handled in the 'handleSubmit' function
    */
    <form onSubmit = {handleSubmit}>
      <label style={{ color: textColor }}>set your text color (Enter HEX code): <br/>
        <input 
          type="text"
          value={color}
          /* whenever event occurs, that is, when the input in the form changed, 
           update the color variable with the input input in the form. 
           And e.targer.value represents input in the form */
          onChange={handleInputChange}
        />
      </label>

      {/* set type = "submit" means it is a default button used to submit the 
      form's data. When the button is clicked, the browser tries to submit the
       form data.*/}
      <button
        type="submit"
      >
      submit
      </button>
    </form>

  )
} 


// This renders the main page
function App() {
  // define variables and functions to control the color of the background and text
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  /* set the style to be varied, variable textColor and backgroundColor 
      dynamically set the color of the page
  */
  return (
    <div id = "root" className="App" style={ { backgroundColor: backgroundColor } }>
      <header className="App-header">

        <h1 style={{ color: textColor }}> This is a background and text color picker </h1>

        <BackgroundColorInputForm textColor={textColor} setBackgroundColor={setBackgroundColor} />
        <br/>
        <TextColorInputForm textColor={textColor} setTextColor={setTextColor} />

      </header>
      
    </div>
    
  );
}


export default App;
