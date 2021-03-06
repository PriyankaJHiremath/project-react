import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Count from './component/Count';
import Clock from './component/Clock';
import Toggle from './component/Toggle';
import LoggedInUser from './component/LoggedInUser';

function App() {
  return (
    <div className="App">
    <LoggedInUser isLoggedIn={false}/>
    {/*<Toggle/>
    <Clock/>
     <Count/>
   <Message/>
     <Greet name="bruce" heroName="Batman">
     <button>Enter</button>
     </Greet>
     <Greet name="clark" heroName="SuperMan"/>
     <Greet name="diana" heroName="Wonder Women"/>
     <Welcome name="bruce" heroName="Batman">
     <button>Enter</button>
     </Welcome>
     <Welcome name="clark" heroName="SuperMan"/>
     <Welcome name="diana" heroName="Wonder Women"/>
  <Hello/>*/}
    </div>
  );
}

export default App;
