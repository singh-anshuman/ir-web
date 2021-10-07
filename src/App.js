import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {Col, Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Body/>
      </Container>
    </div>
  );
}

export default App;
