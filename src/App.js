import './App.css';
import ButtonWrap from './components/ButtonWrap';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoList />
        <ButtonWrap />
    </div>
  );
}

export default App;
