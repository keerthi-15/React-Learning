import logo from './logo.svg';
import './App.css';
import Greet  from './components/GreetFunc';
import Welcome from './components/GreetClass';
import JavaScript from './components/ClassWithJSX';
import WithoutJSX from './components/ClassWithoutJSX';

function App() {
  return (
  <div className="Greet">
    {/* <Greet />
    <Welcome /> */}
    {/* <JavaScript /> */}
    <WithoutJSX />
  </div>
  );
}

export default App;
