import logo from './logo.svg';
import './App.css';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

function App() {
  return (setInterval(tick, 1000));
}

export default App;
