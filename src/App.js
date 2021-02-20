import './App.css';
import List from './components/List';
import sampleData from './sampleData/sampleData';

function App() {

  return (
    <div className="App">
        <h1>Todo List</h1>
        <List todos={sampleData} />
    </div>
  );
}

export default App;
