import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const App = () => {
  return(
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          classname="" value="0" onClick={() => {
            console.log('Button Clicked!');
          }} 
        >
        </Button>
      </ButtonBox>
    </Wrapper>
  );
}

export default App;