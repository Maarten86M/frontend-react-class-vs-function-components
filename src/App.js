import React from 'react';
import './App.css';



function App() {
    const [lightClick, setLightClick] = React.useState();

    function handleClick(){
        setLightClick(!lightClick);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {lightClick ? "aan" : "uit"}
        </button>
  );
}

export default App;
