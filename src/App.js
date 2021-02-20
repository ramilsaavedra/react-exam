import './App.css';
import ButtonWrap from './components/ButtonWrap';
import List from './components/List';
import sampleData from './sampleData/sampleData';

function App() {

  return (
    <div className="App">
        <h1>Todo List</h1>
        <List todos={sampleData} />
        <ButtonWrap />
    </div>
  );
}

export default App;
