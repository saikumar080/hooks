
import './App.css';
import NotUSeCallback from './UseCallback/NotUSeCallback';
import Parent from './UseCallback/USecallback';

function App() {
  return (
    <div className="App">
      <header>React Hooks</header>
      <Parent/>
      <NotUSeCallback />
    </div>
  );
}

export default App;
