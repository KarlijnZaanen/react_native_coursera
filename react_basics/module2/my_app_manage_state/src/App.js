import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import React from "react";

function App() {
    const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits_prop={fruits}/>
      <FruitsCounter num_fruits={fruits.length}/>
    </div>
  );
}

export default App;
