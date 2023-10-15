import R1 from './Components/R1';
import './App.css';

function App() {
  const colors = [
    'red',
    'rgb(2, 255, 2)',
    'blue',
    'yellow',
    'rgb(251, 143, 251)',
    'aqua',
    'orange',
    'rgb(160, 2, 227)',
    'pink',
    'green',
    'orangered',
    'rgb(0, 223, 223)',
    'brown',
    'rgb(217, 141, 0)',
    '#0f0e46',
    'gold',
  ];



  return (
    <div className="App">
          <R1 colors={colors} />
    </div>
  );
}

export default App;