import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import UtilityBar from './components/UtilityBar/UtilityBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <UtilityBar/>
      <Body/>
    </div>
  );
}

export default App;
