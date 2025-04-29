
import './App.css';
import NotUSeCallback from './UseCallback/NotUSeCallback';
import Parent from './UseCallback/USecallback';
import SearchBar from './UseRef/SearchBar';
import UseRefDom from './UseRef/UseRefDom';
import UseRefHook from './UseRef/UseRefHook';
import UseMemoComponent from './UseMemo/UseMemoComponent';

function App() {
  return (
    <div className="App">
      <header>React Hooks</header>
      {/* <Parent/> */}
      {/* <NotUSeCallback /> */}
      {/* <UseRefHook /> */}
      {/* <UseRefDom /> */}
      {/* <SearchBar /> */}
      <UseMemoComponent />

    </div>
  );
}

export default App;
