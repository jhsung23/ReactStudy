import logo from './logo.svg';
import './App.css';
// import notify from './notify';

function App() {
  const onClick = () => {
    // notify();

    // 동적으로 import하기
    // import를 함수로 사용하면 Promise를 반환한다.
    import('./notify').then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
