import './App.css';
import Button from './components/Button/Button';
import List from './components/List';
import sampleData from './sampleData/sampleData';

function App() {

  return (
    <div className="App">
        <h1>Todo List</h1>
        <List todos={sampleData} />
        <Button>Close Shipment</Button>
    </div>
  );
}

export default App;
