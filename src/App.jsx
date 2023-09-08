import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import styled from 'styled-components';
import Modal from './components/Modal';
import Select from './components/Select';

function App() {
  return (
    <Body>
      <Button />
      <Input />
      <Modal />
      <Select />
    </Body>
  );
}

const Body = styled.div`
  margin: 10px 20px;
`

export default App;
