import './App.css';
import ButtonWrap from './components/ButtonWrap';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <HomePage />
        <ButtonWrap />
    </div>
  );
}

export default App;
