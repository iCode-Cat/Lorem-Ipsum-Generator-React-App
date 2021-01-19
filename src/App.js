import React, { useState } from 'react';
import Controller from './Components/Controller';
import Text from './Components/Text'
import data from './data';
import './Components/Sass/App.scss'
function App() {

  const [value, setValue] = useState(0);
  
  console.log(data);
  
  return (

    <div className="main-container">
     
     <Controller setValue={setValue} value={value}/>
     {data.filter((data, index) =>index < value).map(text => <Text text={text}/>)}
      

    </div>

    )
}

export default App;
