//Import the React and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    const buttonText = 'Click Me';
    const buttonText2 = 'Ok';

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name: </label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText2}
            </button>
        </div>
    );    
};

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);