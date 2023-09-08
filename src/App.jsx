import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import styled from 'styled-components';

function App() {
  return (
    <Body>
      <Button />
      <Input />
    </Body>
  );
}

const Body = styled.div`
  margin: 10px 20px;
`

export default App;
